<script>
  import { navigate } from "svelte-routing";
  import PremiumPayment from "../routes/PremiumPayment.svelte";
  let buslyLogo = "./src/assets/img/busly-logo.png";

  function gotoAccount() {
    navigate("/account");
  }
</script>

<div class="nav-bar flex aic jcsb">
  <a href="/"><img src={buslyLogo} class="clickable" alt="Busly Logo" /></a>
  <div class="nav-options flex aic">
    <PremiumPayment/>
    <div class="account">
      <button class="clickable my-account" on:click={gotoAccount}>My Account</button>
    </div>
  </div>
</div>

<style>
  .nav-bar {
    height: 10vh;
    width: 100vw;
    z-index: 999;
    background-color: whitesmoke;
    position: relative;
    padding: 2vh 10vw;
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px;
  }

  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
  }

  img {
    height: 5vh;
    width: auto;
  }

  .my-account {
    border: 1px solid black;
    background-color: white;
    color: #3f007a;
    padding: 0.2rem 1rem;
    margin: 0 5rem;
  }

</style>
