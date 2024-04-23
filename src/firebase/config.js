import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBokTSqVM4QkIF7WdKmL8bbCIAv8vsFz8w",
  authDomain: "writing-note-d40dc.firebaseapp.com",
  projectId: "writing-note-d40dc",
  storageBucket: "writing-note-d40dc.appspot.com",
  messagingSenderId: "510510114113",
  appId: "1:510510114113:web:65c6a61e52edf4bfb2adc0",
  measurementId: "G-FWVEYZ8KKB"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()