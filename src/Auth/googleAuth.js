// src/auth/googleAuth.js
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    alert(`Welcome ${user.displayName}`);
  } catch (error) {
    alert(error.message);
  }
};