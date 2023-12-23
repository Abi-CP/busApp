<!-- DestinationInput.svelte -->

<script>
  import { districts } from "../js/districtNames";
  import District from "./District.svelte";

  export let destinationInputValue = "";
  let filteredDistricts = [];
  let hiLiteIndex = null;
  let searchInput;

  let isActiveInput = false; // Track if this is the active input

  const filterDistricts = () => {
    let storageArr = [];
    if (destinationInputValue) {
      districts.forEach((district) => {
        if (district.toLowerCase().startsWith(destinationInputValue.toLowerCase())) {
          storageArr = [...storageArr, makeMatchBold(district)];
        }
      });
    }
    filteredDistricts = storageArr;
  };

  $: if (!destinationInputValue) {
    filteredDistricts = [];
    hiLiteIndex = null;
  }

  const setInputVal = (districtName) => {
    if (isActiveInput) { // Check if this is the active input
      destinationInputValue = removeBold(districtName);
      filteredDistricts = [];
      hiLiteIndex = null;
      document.querySelector("#dest-district-input").focus();
    }
  };

  const makeMatchBold = (str) => {
    let matched = str.substring(0, destinationInputValue.length);
    let makeBold = `<strong>${matched}</strong>`;
    let boldedMatch = str.replace(matched, makeBold);
    return boldedMatch;
  };

  const removeBold = (str) => {
    return str ? str.replace(/<(.)*?>/g, "") : "";
  };

  $: hiLitedDistrict = filteredDistricts[hiLiteIndex];

  const navigateListDest = (e) => {
    if (e.key === "ArrowDown" && hiLiteIndex <= filteredDistricts.length - 1) {
      hiLiteIndex === null ? (hiLiteIndex = 0) : (hiLiteIndex += 1);
    } else if (e.key === "ArrowUp" && hiLiteIndex !== null) {
      hiLiteIndex === 0
        ? (hiLiteIndex = filteredDistricts.length - 1)
        : (hiLiteIndex -= 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      setInputVal(filteredDistricts[hiLiteIndex]);
    } else {
      return;
    }
  };

</script>

<svelte:window on:keydown={navigateListDest} />

<div class="destination-wrapper">
  <div class="autocomplete">
    <input
      id="dest-district-input"
      type="text"
      placeholder="Enter Destination"
      required
      bind:this={searchInput}
      bind:value={destinationInputValue}
      on:input={filterDistricts}
      on:focus={() => (isActiveInput = true)} 
      on:blur={() => (isActiveInput = false)} 
    />
  </div>

  {#if filteredDistricts.length > 0}
    <ul id="autocomplete-items-list">
      {#each filteredDistricts as district, i}
        <District
          itemLabel={district}
          highlighted={i === hiLiteIndex}
          on:click={() => setInputVal(district)}
        />
      {/each}
    </ul>
  {/if}
</div>
