<script>
  import Navigation from "../components/Navigation.svelte";
  import Main from "../components/Main.svelte";
  import Faq from "../components/Faq.svelte";
  let offers ="./src/assets/img/offers.png", primo = "./src/assets/img/primo.svg", primoAssured = "./src/assets/img/primo-assured.png";
</script>

<main>
  <Navigation />
  <Main />
  <div class="flex jcc img"><img src={offers} alt="offers" class="offer-img"/></div>
  <div class="flex jcc img"><img src={primo} alt="primo logo" class="primo-logo-img"/></div>
  <div class="flex jcc img"><img src={primoAssured} alt="primo-assured" class="primo-assured-img"/></div>
  <Faq />
</main>

<style>
  main {
    height: 200vh;
    padding-top: 10vh;
  }
  .img{
    padding: 5rem 0 0;
  }
  .offer-img{
    width: 90vw;
    height: auto;
  }
  .primo-logo-img{
    width: 40vw;
    height: auto;
  }
  .primo-assured-img{
    width: 70vw;
    height: auto;
  }
</style>
