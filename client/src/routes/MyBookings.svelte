<script>
    import { onMount } from 'svelte';
    import firebase from 'firebase/app';
    import 'firebase/auth';
    import 'firebase/firestore';
  
    let userBookings = [];
  
    onMount(() => {
      // Assume you have Firebase initialized and authenticated the user
      const firestore = firebase.firestore();
      const userId = firebase.auth().currentUser.uid;
  
      // Retrieve user bookings
      const bookingsRef = firestore.collection('yourCollection').where('userId', '==', userId);
  
      bookingsRef.onSnapshot((snapshot) => {
        userBookings = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      });
    });
  </script>
  
  <main>
    <h1>Your Bookings</h1>
  
    {#if userBookings.length > 0}
      <ul class="bookings-list">
        {#each userBookings as booking (booking.id)}
          <li class="booking-item">
            <strong>Booking ID:</strong> {booking.id} <br />
            <strong>Location:</strong> {booking.location} <br />
            <strong>Date:</strong> {booking.date} <br />
            <!-- Add other booking details as needed -->
          </li>
        {/each}
      </ul>
    {:else}
      <p class="no-bookings">No bookings found.</p>
    {/if}
  </main>
  
  <style>
    main {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
  
    h1 {
      color: #333;
    }
  
    .bookings-list {
      list-style-type: none;
      padding: 0;
    }
  
    .booking-item {
      border: 1px solid #ccc;
      padding: 10px;
      margin-bottom: 10px;
    }
  
    .no-bookings {
      color: #888;
    }
  </style>
  