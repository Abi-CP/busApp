<!-- src/routes/Login.svelte -->

<script>
  import {
    getAuth,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { onMount } from "svelte";
  let googleLogo = "../src/assets/img/google-logo.png";

  // Import Firebase app from the initialization module
  import { app } from "../firebaseConfig";
  import Navigation from "../components/Navigation.svelte";
  import { navigate } from "svelte-routing";

  // Get the Auth object from the initialized app
  const auth = getAuth(app);

  let email = "";
  let password = "";
  let errorMessage = "";

  onMount(() => {
    // Clear error message on component mount
    errorMessage = "";
  });

function gotoAccount(){
  navigate("/account")
}

  const handleLogin = async () => {
    try {
      // Use Firebase signInWithEmailAndPassword to authenticate the user with email/password
      await signInWithEmailAndPassword(auth, email, password);

      // You can perform additional actions after successful login
      console.log("User logged in successfully!");
      gotoAccount()
    } catch (error) {
      // Display error message to the user
      errorMessage = "Invalid email/password. Please try again.";
      console.error("Error logging in:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // Use Firebase signInWithPopup to authenticate the user with Google
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      // You can perform additional actions after successful Google login
      console.log("User logged in with Google successfully!");
      gotoAccount()
    } catch (error) {
      // Display error message to the user
      errorMessage = "Error logging in with Google. Please try again.";
      console.error("Error logging in with Google:", error.message);
    }
  };
</script>

<Navigation />
<div class="container">
  <h2>Login</h2>

  <!-- Display error message -->
  {#if errorMessage}
    <p style="color: red; text-align: center;">{errorMessage}</p>
  {/if}

  <form on:submit|preventDefault={handleLogin}>
    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} />

    <button type="submit">Login</button>
  </form>

  <button on:click={handleGoogleLogin}>
    <img class="google-logo" src={googleLogo} alt="Google Logo" />
    Login with Google
  </button>
  <h4>Not a user? <a href="/register">Register</a></h4>
</div>



<style>
  .container {
    /* font-family: 'Roboto', sans-serif; */
    margin: 0;
    padding: 12vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  div {
    width: 100%;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    color: #333;
    margin-bottom: 6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40vw;
  }

  label {
    font-weight: bold;
    color: #333;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin-top: 5rem;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
    min-width: 30vw;
    border-radius: 25px;
  }

  button:hover {
    background-color: #3c78d8;
  }

  button:active {
    background-color: #356fce;
  }

  .google-logo {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  p {
    color: #ff4081;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
  h4{
    margin-top: 3rem;
  }
</style>
