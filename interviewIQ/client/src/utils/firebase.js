
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewagent-c6032.firebaseapp.com",
  projectId: "interviewagent-c6032",
  storageBucket: "interviewagent-c6032.firebasestorage.app",
  messagingSenderId: "554243704442",
  appId: "1:554243704442:web:d7bcfed471f6ffad6eddc3"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}