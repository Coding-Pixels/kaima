import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore/lite';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  connectAuthEmulator,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.KAIMA_API_KEY,
  authDomain: process.env.KAIMA_AUTH_DOMAIN,
  projectId: process.env.KAIMA_PROJECT_ID,
  storageBucket: process.env.KAIMA_STORAGE_BUCKET,
  messagingSenderId: process.env.KAIMA_MESSAGING_SENDER_ID,
  appId: process.env.KAIMA_APP_ID,
  measurementId: process.env.KAIMA_MEASUREMENT_ID,
};

const fire = initializeApp(firebaseConfig);
const db = getFirestore(fire);
const auth = getAuth();
const analytics = getAnalytics(fire);

if (location.hostname === 'localhost') {
  connectFirestoreEmulator(db, 'localhost', 8080);
  connectAuthEmulator(auth, 'http://localhost:9099');
}

export default fire;
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
};
