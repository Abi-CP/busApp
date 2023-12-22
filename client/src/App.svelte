<script>
  import Navigation from "./components/Navigation.svelte";
  import Main from "./components/Main.svelte";
  import Offers from "./components/Offers.svelte";
</script>

<main>
  <Navigation/>
  <Main/>
  <Offers/>
</main>

<style>
  main{
    height: 200vh;
    padding-top: 10vh;
  }
</style>