// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCuI_GPvAmPC9_XtwFOp53kDSXKtVHUzKs",
   authDomain: "backend-mentalapp.firebaseapp.com",
   projectId: "backend-mentalapp",
   storageBucket: "backend-mentalapp.appspot.com",
   messagingSenderId: "950246441176",
   appId: "1:950246441176:web:25db1b76299b9a0e8e57ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export { app, google, facebook, db };