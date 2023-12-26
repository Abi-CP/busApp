<script>
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { navigate } from 'svelte-routing';
  import { writable } from 'svelte/store';
  import {busToBook} from '../js/stores'

  export let bus;
  export let source;
  export let destination;
  // export let busToBook;

  const auth = getAuth();
  const user = writable(null);

  onAuthStateChanged(auth, (authUser) => {
    user.set(authUser);
  });

  function convertTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.round(minutes % 60);

    return `${hours} hours and ${remainingMinutes} minutes`;
  }

  function converHours(minutes) {
    const days = parseInt((Math.floor(minutes / 1440)).toFixed(0));
    const remainingMinutes = Math.round(minutes % 60).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
    });

    if (days > 0) {
      const hours = Math.floor((minutes - days * 1440) / 60);
      return `${hours}:${remainingMinutes} + ${days}day(s)`;
    }
    const hours = Math.floor(minutes / 60);
    return `${hours}:${remainingMinutes}`;
  }
  
  function handleBookClick() {
    const currentUser = $user;
    if (!currentUser) {
      alert('Please log in to book a bus.');
      navigate('/login');
    } else {
      // Navigate to BookingPage.svelte with the bus ID
      // details = {from: source, to:destination}
      // let bookingBusDetails ={}
      busToBook.set(bus)
      navigate('/booking-page');
    }
  }
</script>

<div class="card-container">
  <div class="flex jcsb">
    <h2 class="compant-name">{bus.companyName}</h2>
  </div>
  <div class="place-container flex aic jcsb">
    <div class="source-container">
      <h3 class="source-place place">{bus.source}</h3>
      <h6>Source</h6>
      <h4 class="source-time time">{converHours(bus.sourceTime)}</h4>
    </div>
    <div>
      <h4 class="time-container">{convertTime(bus.journeyTime)}</h4>
      <h4 class="distance">{bus.distance} km</h4>
    </div>
    <div class="destination-container">
      <h3 class="destination-place place">{bus.destination}</h3>
      <h6>Destination</h6>
      <h4 class="destination-time time">{converHours(bus.destinationTime)}</h4>
    </div>
    <div class="booking">
      <h2 class="fare">₹{bus.totalFare}</h2>
      <button type="button" class="book-btn" on:click={handleBookClick}>BOOK</button>
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
  .distance,
  .book-btn {
    margin-top: 20px;
  }
  .book-btn {
    background-color: rgb(69, 0, 134);
    color: white;
    padding: 2px 5px;
    border-radius: 5px;
  }
</style>
