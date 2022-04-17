// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADM5GJk7B_r06DV2kefPpy3GB6-RJrx3A",
  authDomain: "doctor-chamber-95637.firebaseapp.com",
  projectId: "doctor-chamber-95637",
  storageBucket: "doctor-chamber-95637.appspot.com",
  messagingSenderId: "141077953733",
  appId: "1:141077953733:web:2d4b906f36c6bb8e69c4ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
export default auth;
