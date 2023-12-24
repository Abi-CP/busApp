<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import SearchResults from "./routes/SearchResults.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
  import Account from "./routes/Account.svelte";
  import BookingPage from "./routes/BookingPage.svelte";
</script>

<Router>
  <Route path="/" component={Home} />
  <Route path="/search-results" component={SearchResults} />
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  <Route path="/account" component={Account}/>
  <Route path="/booking-page" component={BookingPage}/>
</Router>
