<!-- src/routes/Account.svelte -->

<script>
  import { onMount } from "svelte";
  import {
    getAuth,
    onAuthStateChanged,
    signOut,
    getAdditionalUserInfo,
  } from "firebase/auth";
  import Navigation from "../components/Navigation.svelte";
  import { navigate } from "svelte-routing";
  import { app } from "../firebaseConfig";
  import { getFirestore, doc, getDoc } from "firebase/firestore";

  let user = null;
  let isPremium = false;
  let userId=''
  const auth = getAuth(app);

  onMount(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      // Redirect to login if the user is not logged in
      if (!authUser) {
        navigate("/login");
        return;
      }

      user = authUser;

      if (user) {
      userId = user.uid;

      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);

      try {
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          // Access the premium status
          isPremium = userData.isPremium || false;
        } else {
          console.error("User document does not exist");
        }
      } catch (error) {
        console.error("Error retrieving user data:", error.message);
      }
    } else {
      console.error("User not authenticated");
    }
    });

    // Unsubscribe from the listener when the component is destroyed
    return () => unsubscribe();
  });

  const handleLogout = async () => {
    try {
      // Use Firebase signOut to log the user out
      await signOut(auth);

      // Navigate to the login page after logout
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
</script>

<Navigation />
<div class="container">
  <h2>My Account</h2>

  {#if user}
    <p>User Name: {user.displayName}</p>
    <p>Email: {user.email}</p>
    <p>Premium Member: {isPremium ? 'Yes' : 'No'}</p>

    <!-- Add any additional user information you want to display -->

    <button on:click={handleLogout}>Logout</button>
  {:else}
    <p>Loading...</p>
  {/if}
</div>

<style>
  .container {
    /* Add your styling for the account page */
    margin: 10vh 20px 20px 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
  }

  h2 {
    text-align: center;
    color: #333;
  }

  p {
    margin: 10px 0;
  }

  button {
    padding: 10px;
    background-color: #4285f4;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #3c78d8;
  }

  button:active {
    background-color: #356fce;
  }
</style>
