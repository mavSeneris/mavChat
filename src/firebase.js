// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6sX_jCSxv-5ry93W5lzvqYmRmybl01eg",
  authDomain: "chatapp-844bd.firebaseapp.com",
  projectId: "chatapp-844bd",
  storageBucket: "chatapp-844bd.appspot.com",
  messagingSenderId: "286851293478",
  appId: "1:286851293478:web:71af349ad1b3ba493e61e7",
  measurementId: "G-66K1HKC9J5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);