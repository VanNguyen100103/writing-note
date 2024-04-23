import { Link, NavLink } from 'react-router-dom'
import { auth, provider } from '../firebase/config'
import { signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react'
import Logo from '../assets/images/logo.png'

export const Header = () => {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false)

  function handleLogin(){
    signInWithPopup(auth, provider).then(result => {
      setIsAuth(true)
      localStorage.setItem('isAuth', true)
    })
  }

  function hanldeLogout(){
    signOut(auth)
    setIsAuth(false)
    localStorage.setItem('isAuth', false)
  }
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='writing-note'/>
        <span>Write Note</span>
      </Link>
      <nav>
        <NavLink to='/' className='link' end>Home</NavLink>
        { isAuth ? (
          <>
            <NavLink to='/create' className='link'>Create</NavLink>
            <button onClick={hanldeLogout} className='auth'><i className="bi bi-box-arrow-right"></i> Logout</button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i> Login</button>
        )

        }
      </nav>
    </header>
  )

}

