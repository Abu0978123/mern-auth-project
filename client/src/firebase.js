// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
//   import.meta.env.FIREBASE_API_KEY,
  authDomain: "mern-auth-11325.firebaseapp.com",
  projectId: "mern-auth-11325",
  storageBucket: "mern-auth-11325.appspot.com",
  messagingSenderId: "994811841840",
  appId: "1:994811841840:web:031fb7278990721c770cf5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 