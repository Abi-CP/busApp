<script>
    // @ts-nocheck
  
    import { districts } from "../js/districtNames";
  
    function setNextFocus(event) {
      const inputs = document.querySelectorAll(".input-field");
      const currentField = event.target;
      const currentIndex = Array.from(inputs).indexOf(currentField);
  
      if (
        event.key === "Enter" &&
        currentIndex !== -1 &&
        currentIndex < inputs.length - 1
      ) {
        inputs[currentIndex + 1].focus();
      }
    }
  

    function handleSearchClick() {
      const sourceValue = document.getElementById("source").value;
      const destinationValue = document.getElementById("destination").value;
      const dateValue = document.getElementById("date").value;
  
      verifyDate(dateValue);
  
      console.log("From:", sourceValue);
      console.log("To:", destinationValue);
      console.log("Date:", dateValue);
    }
  </script>
  
  <div class="search-box flex">
    <div class="input-container flex">
      <label for="source" class="input-label">From</label>
      <input
        type="text"
        id="source"
        class="input-field"
        placeholder="Enter source location"
        required
        on:keydown={setNextFocus}
      />
    </div>
  
    <div class="input-container flex">
      <label for="destination" class="input-label">To</label>
      <input
        type="text"
        id="destination"
        class="input-field"
        placeholder="Enter destination location"
        required
        on:keydown={setNextFocus}
      />
    </div>

  
    <div class="input-container search clickable">
      <button type="button" on:click={handleSearchClick}>Search</button>
    </div>
  </div>
  
  <style>
    .search-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70vw;
      height: 10vh;
      border: 1px solid #eee;
      border-radius: 25px;
      box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
      background-color: whitesmoke;
    }
  
    .input-container {
      flex: 1;
      padding: 0 10px;
    }
  
    .input-label {
      display: inline;
      padding: 0 1rem;
      margin-bottom: 5px;
      font-size: 1rem;
      color: #333;
    }
  
    .input-field {
      height: 100%;
      width: 100%;
      font-size: 1rem;
      border: none;
      outline: none;
      background: none;
    }
  
    .search {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 10vw;
      padding: 0 15px;
      border: none;
      outline: none;
      background-color: #4caf50;
      cursor: pointer;
      border-radius: 0 25px 25px 0;
    }
  
    .search button {
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      color: white;
      cursor: pointer;
      font-size: 1rem;
    }
  </style>
  