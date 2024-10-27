// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyzgcUOSXu0juJ1IRuKIs75jItEU8Ct14",
  authDomain: "indievista-710ba.firebaseapp.com",
  projectId: "indievista-710ba",
  storageBucket: "indievista-710ba.appspot.com",
  messagingSenderId: "548163800782",
  appId: "1:548163800782:web:d20617226c0df935828a9f",
  measurementId: "G-5LBDTN0JDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
