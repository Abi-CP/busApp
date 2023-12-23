<!-- SearchResults.svelte -->
<script>
  import Navigation from "../components/Navigation.svelte";
  import { onMount } from "svelte";
  import { searchData } from "../js/stores";
  import SearchResultCard from "../components/SearchResultCard.svelte";

  let searchResults = [];

  onMount(() => {
    // Subscribe to changes in the store when the component mounts
    const unsubscribe = searchData.subscribe((value) => {
      console.log("Search data in SearchResult:", value);
      searchResults = value.results || []; // Assuming your search data has a 'results' property
    });

    // Cleanup the subscription when the component is destroyed
    return unsubscribe;
  });
</script>

<div class="search-results container">
  <Navigation />
  <h1>Search Result</h1>
</div>
<SearchResultCard {searchResults}/>
{#if searchResults.length > 0}
  <!-- Render your results -->
  <ul>
    {#each searchResults as result (result.id)}
      <li>{result.name}</li>
      <!-- Render other properties as needed -->
    {/each}
  </ul>
{:else}
  <p>No results found.</p>
{/if}

<style>
  .search-results.container {
    padding-top: 10vh;
  }
</style>
