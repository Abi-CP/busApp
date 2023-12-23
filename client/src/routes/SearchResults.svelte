<script>
  import Navigation from "../components/Navigation.svelte";
  import { onMount } from "svelte";
  import { searchData } from "../js/stores";
  import SearchResultCard from "../components/SearchResultCard.svelte";

  let searchResults = [], source, destination;

  onMount(() => {
    // Subscribe to changes in the store when the component mounts
    const unsubscribe = searchData.subscribe((value) => {
      console.log("Search data in SearchResult:", value);

      // @ts-ignore
      searchResults = value.buses || []; // Assuming your search data has a 'buses' property
      // @ts-ignore
      source = value.source || '';
      // @ts-ignore
      destination = value.destination || '';
    });

    // Cleanup the subscription when the component is destroyed
    return unsubscribe;
  });

  
</script>

<div class="search-results container">
  <Navigation />
  <h1>Search Result</h1>
</div>

{#if searchResults.length > 0}
  <!-- Render your results -->
  {#each searchResults as bus (bus.busId)}
    <SearchResultCard {bus} {source} {destination} />
  {/each}
{:else}
  <p>No results found.</p>
{/if}

<style>
  .search-results.container {
    padding-top: 10vh;
  }
</style>
