// firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyA3od-l9i_XZK89LK4p3wB-hjoHUFmj9wE",
  authDomain: "abicp-bus-app.firebaseapp.com",
  projectId: "abicp-bus-app",
  storageBucket: "abicp-bus-app.appspot.com",
  messagingSenderId: "453438990709",
  appId: "1:453438990709:web:5edf64a6962a6a39de4b3c",
  measurementId: "G-QDZNN1H54Z",
};

// Initialize Firebase without Analytics
const app = initializeApp(firebaseConfig);

// Optional: Initialize Firebase Analytics
// Uncomment the following lines if you want to include Firebase Analytics

// const analytics = getAnalytics(app);

const firebaseFirestore = getFirestore(app);

export { app, firebaseFirestore };
