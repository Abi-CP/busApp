<script>
  let buslyLogo = "./src/assets/img/busly-logo.png";
</script>

<div class="nav-bar flex aic jcsb">
  <img src={buslyLogo} class="clickable" alt="Busly Logo" />
  <div class="nav-options flex aic">
    <h3 class="premium clickable">Get Premium</h3>
    <div class="account">
      <h3>My Account</h3>
    </div>
  </div>
</div>

<style>
  .nav-bar {
    height: 10vh;
    width: 100vw;
    background-color: whitesmoke;
    /* color: white; */
    position: relative;
    padding: 2vh 10vw;
    border: 1px solid #eee; /* JUST TO LOOK COOL */
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

  .premium {
    border: 1px solid black;
    background-color: #3f007a;
    color: white;
    padding: 0.2rem 1rem;
    margin: 0 5rem;
  }
</style>
