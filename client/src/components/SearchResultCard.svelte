<script>
  import SearchResults from "../routes/SearchResults.svelte";
</script>

<div class="card-container">
  <div class="flex jcsb">
    <h2 class="compant-name">SearchResults.companyName</h2>
    <h2 class="fare">$100</h2>
  </div>
  <div class="place-container flex aic jcsb">
    <div class="source-container">
      <h3 class="source-place place">SearchResults.source</h3>
      <h6>Source</h6>
      <h4 class="source-time time">Source Time</h4>
    </div>
    <div>
      <h4 class="time-container">SearchResults.journeyTime</h4>
      <h4 class="distance">0km</h4>
    </div>
    <div class="destination-container">
      <h3 class="destination-place place">SearchResults.destination</h3>
      <h6>Destination</h6>
      <h4 class="destination-time time">Dest time</h4>
    </div>
  </div>
</div>

<style>
  .card-container {
    height: 20vh;
    background-color: #f9f9f9;
    border: 1px solid smokewhite;
    border-radius: 25px;
    margin: 10px 25px;
    padding: 25px 50px;
  }
  .place,
  .time,
  .distance {
    margin-top: 20px;
  }
</style>
