// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRVKTmOHHq-lbzfk1V607D6p6eEldn1rc",
  authDomain: "air-quality-97a79.firebaseapp.com",
  projectId: "air-quality-97a79",
  storageBucket: "air-quality-97a79.appspot.com",
  messagingSenderId: "547980185883",
  appId: "1:547980185883:web:3ae2f6130813650aefc3be",
  measurementId: "G-ZGQJ67REP2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); // ✅ Export provider