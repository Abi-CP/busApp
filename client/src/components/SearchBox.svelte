<script>
  import { navigate } from "svelte-routing";
  import SourceInput from "./SourceInput.svelte";
  import DestinationInput from "./DestinationInput.svelte";
  import JourneyDate from "./JourneyDate.svelte";
  import { searchData } from "../js/stores";
  import { app, firebaseFirestore } from "../firebaseConfig";
  import { doc, getDoc } from "firebase/firestore";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";

  let sourceInputValue = "";
  let destinationInputValue = "";
  let dateInput = new Date().toISOString().split("T")[0];
  let user = null;
  let userId = "";
  const auth = getAuth(app);
  let isPremium = false

  onMount(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (!authUser) {
        navigate("/login");
        return;
      }

      user = authUser;
      if (user) {
        userId = user.uid;
        isPremium = await checkPremiumStatus(userId);
      }
    });

    return unsubscribe;
  });

  async function checkPremiumStatus(userId) {
    if (!userId || !firebaseFirestore) {
      console.log("User or premium err");
      return false;
    }

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

  const submitValue = async () => {
    if (sourceInputValue && destinationInputValue) {
      const apiUrl = `http://localhost:3001/api/search?source=${sourceInputValue}&destination=${destinationInputValue}&date=${dateInput}&premium=${isPremium}`;

      try {
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          console.log("API response:", data);

          // Reset inputs after successful API call
          resetInputs();
          // Update the store with the received data
          searchData.set(data);
          console.log("searchData updated:", $searchData);
          // Navigate to searchResults.svelte
          navigate("/search-results");
        } else {
          console.error("API request failed:", response.statusText);
          alert("API request failed");
        }
      } catch (error) {
        console.error("Error during API request:", error);
        alert("Error during API request");
      }
    } else {
      alert("Enter Valid Source and Destination!");
    }
  };

  const resetInputs = () => {
    sourceInputValue = "";
    destinationInputValue = "";
    dateInput = "yyyy-MM-dd";
  };

  const pressedSearch = (e) => {
    if (e.key == "Enter") {
      submitValue();
    }
  };
</script>

<form autocomplete="off" on:submit|preventDefault={submitValue}>
  <div class="search-box flex">
    <SourceInput bind:sourceInputValue />
    <DestinationInput bind:destinationInputValue />
    <JourneyDate bind:dateInput />
    <input
      on:keydown={pressedSearch}
      class="submit-btn"
      type="submit"
      value="Search"
    />
  </div>
</form>
