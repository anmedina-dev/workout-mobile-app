// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATQNCyCXOWgAcxVb_MyPfV0U7TnCZQvXw",
  authDomain: "workout-mobile-app-auth.firebaseapp.com",
  projectId: "workout-mobile-app-auth",
  storageBucket: "workout-mobile-app-auth.appspot.com",
  messagingSenderId: "542164953077",
  appId: "1:542164953077:web:87ee009a9965a04295e2bc",
  measurementId: "G-N0QTXEP9FH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
