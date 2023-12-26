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
  import { app, firebaseFirestore } from "../firebaseConfig";
  import { getFirestore, doc, getDoc } from "firebase/firestore";

  let user = null;
  let isPremium = false;
  let userId = "";
  const auth = getAuth(app);

  async function checkPremiumStatus(userId) {
    const docRef = doc(firebaseFirestore, "premiumUsers", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Premium OK! Document data:", docSnap.data());
      return true;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      return false;
    }
  }

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
        isPremium = await checkPremiumStatus(userId);

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
  function gotoMyBookings() {
    navigate("/my-bookings");
  }
</script>

<main class="flex aic fdr jcc">
  <Navigation />
  <div class="container flex fdc aic">
    <h2>My Account</h2>

    {#if user}
      <div class="info-container flex aic jcc">
        <div class="wrapper aic jcs">
          <p>User Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <p>Premium Member: {isPremium ? "Yes" : "No"}</p>
        </div>
      </div>
      <!-- Add any additional user information you want to display -->
      <div class="div flex aic jcc">
        <button on:click={gotoMyBookings}> My Bookings</button>
        <button style="background-color: firebrick;" on:click={handleLogout}>Logout</button>
      </div>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</main>

<style>
  main{
    height: 80vh;
  }
  .wrapper {
    width: fit-content;
  }
  .container {
    /* Add your styling for the account page */
    margin: 15vh 5vw;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    width: max-content;
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
    margin: 3vh 5vw;
  }

  button:hover {
    background-color: #3c78d8;
  }

  button:active {
    background-color: #356fce;
  }
</style>
