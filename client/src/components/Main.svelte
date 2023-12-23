<script>
import SearchBox from "./SearchBox.svelte";

  let backgroundImage;
  // Function to fetch a random landscape image from Unsplash collection
  function fetchRandomLandscapeImage() {
    fetch("https://source.unsplash.com/collection/1155333/nature")
      .then((response) => {
        // Set the fetched image as the background of the body
        backgroundImage = `url(${response.url})`;
        console.log("bg");
      })
      .catch((error) => console.error("Error fetching random image:", error));
  }

  // Call the function on page load to set the initial random image background
  fetchRandomLandscapeImage();
</script>

<div class="container" style="background-image: {backgroundImage};">
  <div class="space"></div>
    <div class="wrapper  flex jcc"><SearchBox/></div>
</div>

<style>
  .container {
    height: 75vh;
    /* background-image: url({b}); */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    top: 50%;
  }
  .space{
    height: 35vh;
  }
</style>
