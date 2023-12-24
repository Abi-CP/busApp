<!-- src/routes/Register.svelte -->

<script>
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
  import { onMount } from "svelte";
  import Navigation from "../components/Navigation.svelte";

  // Import Firebase app from the initialization module
  import { app } from "../firebaseConfig";
  import { navigate } from "svelte-routing";

  // Get the Auth object from the initialized app
  const auth = getAuth(app);

  let email = "";
  let password = "";
  let confirmPassword = "";
  let username = "";
  let errorMessage = "";

  onMount(() => {
    // Clear error message on component mount
    errorMessage = "";
  });

  function gotoAccount() {
    navigate("/account");
  }

  const handleRegister = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        errorMessage = "Passwords do not match. Please try again.";
        return;
      }

      // Use Firebase createUserWithEmailAndPassword to register the user with email/password
      const authUser = await createUserWithEmailAndPassword(auth, email, password);

      // Update user display name
      await updateProfile(authUser.user, { displayName: username });

      // You can perform additional actions after successful registration
      console.log("User registered successfully!");
      gotoAccount();
    } catch (error) {
      // Display error message to the user
      errorMessage = "Error registering user. Please try again.";
      console.error("Error registering user:", error.message);
    }
  };
</script>

<Navigation />
<div class="container">
  <h2>Register</h2>

  <!-- Display error message -->
  {#if errorMessage}
    <p style="color: red; text-align: center;">{errorMessage}</p>
  {/if}

  <form on:submit|preventDefault={handleRegister}>
    <label for="username">Username:</label>
    <input type="text" id="username" bind:value={username} required />

    <label for="email">Email:</label>
    <input type="email" id="email" bind:value={email} required />

    <label for="password">Password:</label>
    <input type="password" id="password" bind:value={password} required />

    <label for="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" bind:value={confirmPassword} required />

    <button type="submit">Register</button>
  </form>
  <h4>Already a user? <a href="/login">Login</a></h4>
</div>

<style>
  .container {
    /* font-family: 'Roboto', sans-serif; */
    margin: 0;
    padding: 0;
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

  p {
    color: #ff4081;
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
  }
  h4 {
    margin-top: 3rem;
  }
</style>
