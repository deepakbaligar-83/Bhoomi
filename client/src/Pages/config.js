// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWTw5APjWAHcnfGaWH1gxZz_20UG1OLx0",
  authDomain: "first-project-19b62.firebaseapp.com",
  projectId: "first-project-19b62",
  storageBucket: "first-project-19b62.appspot.com",
  messagingSenderId: "120561564623",
  appId: "1:120561564623:web:44910b337e0c8bae9570ba",
  measurementId: "G-3Q2F62YHVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};