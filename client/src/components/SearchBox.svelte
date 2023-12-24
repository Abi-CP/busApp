<script>
  import { navigate } from "svelte-routing";
  import SourceInput from "./SourceInput.svelte";
  import DestinationInput from "./DestinationInput.svelte";
  import JourneyDate from "./JourneyDate.svelte";
  import { searchData } from "../js/stores";

  let sourceInputValue = "";
  let destinationInputValue = "";
  let dateInput = new Date().toISOString().split('T')[0];

  const submitValue = async () => {
    if (sourceInputValue && destinationInputValue) {
      const apiUrl = `http://localhost:3001/api/search?source=${sourceInputValue}&destination=${destinationInputValue}&date=${dateInput}`;

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
