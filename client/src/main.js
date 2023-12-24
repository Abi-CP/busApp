// src/main.js

import './app.css';
import App from './App.svelte';

// Import necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Import your Firebase configuration from the environment variables
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Auth object from the initialized app
const auth = getAuth(app);

// Uncomment the following lines if you want to use Firebase in your Svelte app
// import { user } from './js/stores';

// Subscribe to authentication state changes
// auth.onAuthStateChanged((authUser) => {
//   user.set(authUser);
// });

// Create the Svelte app
const svelteApp = new App({
  target: document.getElementById('app'),
});

export default svelteApp;
