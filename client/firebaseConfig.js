// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3od-l9i_XZK89LK4p3wB-hjoHUFmj9wE",
  authDomain: "abicp-bus-app.firebaseapp.com",
  projectId: "abicp-bus-app",
  storageBucket: "abicp-bus-app.appspot.com",
  messagingSenderId: "453438990709",
  appId: "1:453438990709:web:5edf64a6962a6a39de4b3c",
  measurementId: "G-QDZNN1H54Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);