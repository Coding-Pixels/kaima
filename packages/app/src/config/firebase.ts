import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore/lite'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  connectAuthEmulator,
} from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KAIMA_APP_API_KEY,
  authDomain: import.meta.env.VITE_KAIMA_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_KAIMA_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_KAIMA_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_KAIMA_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_KAIMA_APP_APP_ID,
  measurementId: import.meta.env.VITE_KAIMA_APP_MEASUREMENT_ID,
}

const fire = initializeApp(firebaseConfig)
const db = getFirestore(fire)
const auth = getAuth()
const analytics = getAnalytics(fire)

if (location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(auth, 'http://localhost:9099')
}

export default fire
export {
  db,
  auth,
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  analytics,
}
