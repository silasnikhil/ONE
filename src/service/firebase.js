// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz4iq9YIuNerDGYNyrxOPFeCPdK3y9w5U",
  authDomain: "auth-theone.firebaseapp.com",
  projectId: "auth-theone",
  storageBucket: "auth-theone.appspot.com",
  messagingSenderId: "524884690476",
  appId: "1:524884690476:web:9f53cf351916398b7ef389",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
