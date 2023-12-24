// client/src/auth/auth.js
import firebase from 'firebase/app';
import 'firebase/auth';

/**
 * @param {string} email
 * @param {string} password
 */
export async function signUp(email, password) {
  try {
    // @ts-ignore
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log('User signed up:', userCredential.user);
  } catch (error) {
    console.error('Error signing up:', error.code, error.message);
    // Display user-friendly error message to the user
    // For example, you can use a store to manage error messages and display them in your components.
  }
}
