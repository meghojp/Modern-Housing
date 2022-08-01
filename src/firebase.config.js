// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: 'modern-housing-web-app.firebaseapp.com',
  projectId: 'modern-housing-web-app',
  storageBucket: 'modern-housing-web-app.appspot.com',
  messagingSenderId: '709067536490',
  appId: '1:709067536490:web:62b8ab9b2c5b8563afb213',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
