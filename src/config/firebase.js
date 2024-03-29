import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBzpwQxyRMBwXPTpLu6Q40RDzo8v45REYM",
  authDomain: "ergasia-3-eam.firebaseapp.com",
  projectId: "ergasia-3-eam",
  storageBucket: "ergasia-3-eam.appspot.com",
  messagingSenderId: "510554016764",
  appId: "1:510554016764:web:4d4a5ba6b9a70616920079",
  measurementId: "G-T8L0NH3KJ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);