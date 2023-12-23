<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import SearchResults from "./routes/SearchResults.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/search-results" component={SearchResults} />
</Router>
