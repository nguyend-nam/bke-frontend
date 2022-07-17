import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyLomb5hohlGICWfJBZxY_pijNgqWSVvo",
  authDomain: "bkenglish-auth.firebaseapp.com",
  projectId: "bkenglish-auth",
  storageBucket: "bkenglish-auth.appspot.com",
  messagingSenderId: "1091985353466",
  appId: "1:1091985353466:web:fa5856b509c5ac514af743",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
