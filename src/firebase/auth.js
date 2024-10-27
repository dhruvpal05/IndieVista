// src/auth.js
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export const signUpWithEmail = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

// export const signInWithGoogle = async () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };

export const passwordReset = async (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const signOut = async () => {
  return auth.signOut();
};
