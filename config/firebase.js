import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfigVal } from "../config";
const firebaseConfig = {
  apiKey: firebaseConfigVal.API_KEY,
  authDomain: firebaseConfigVal.AUTH_DOMAIN,
  projectId: firebaseConfigVal.PROJECT_ID,
  storageBucket: firebaseConfigVal.STORAGE_BUCKET,
  messagingSenderId: firebaseConfigVal.MESSAGING_SENDER_ID,
  appId: firebaseConfigVal.APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
