<script>
  import SearchBox from "./SearchBox.svelte";

  let backgroundImage;
  // Function to fetch a random landscape image from Unsplash collection
  function fetchRandomLandscapeImage() {
    fetch("https://source.unsplash.com/collections/2470411/travel")
      .then((response) => {
        if (response.ok) {
          // The response URL directly contains the image URL
          const imageUrl = response.url;
          // Set the fetched image as the background of the body
          document.body.style.backgroundImage = `url(${imageUrl})`;
          document.body.style.backgroundSize = "cover"; // Optional: Makes sure the image covers the whole screen
          document.body.style.backgroundPosition = "center"; // Optional: Center the image
          console.log("Background image set to:", imageUrl);
        } else {
          console.error("Failed to fetch image. Status:", response.status);
        }
      })
      .catch((error) => console.error("Error fetching random image:", error));
  }

  // Call the function to set the background image when the script runs
  // fetchRandomLandscapeImage();

  // Call the function on page load to set the initial random image background
  fetchRandomLandscapeImage();
</script>

<div
  class="container"
  style="background-image:url('https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg');"
>
  <h6>
    Image by <a
      href="https://pixabay.com/users/sofcor-6983808/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2990060"
      >Sofia Cristina Córdova Valladares</a
    >
    from
    <a
      href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2990060"
      >Pixabay</a
    >
    <div class="space"></div>
  </h6>
  <div class="wrapper flex jcc"><SearchBox /></div>
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
  .space {
    height: 35vh;
  }
</style>
