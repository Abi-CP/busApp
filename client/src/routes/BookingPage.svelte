<script>
    import { onMount } from 'svelte';
    // import { useParams } from 'svelte-routing';
    import { searchData } from '../js/stores';

  // Fetch bus details based on the route parameter (bus ID)
//   let { id } = useParams();
  let busDetails = {}; // Fetch bus details using busId from your data source

  // Form state
  let numberOfTickets = 1;
  let selectedPaymentOption = 'credit_card';
  
    onMount(() => {
      // Fetch bus details from your data source based on busId
      // For example, you might have an API call or use a store to get bus details
      // busDetails = fetchBusDetails(busId); // Implement this based on your data fetching logic
    });
  
    function handleBookNow() {
      // Implement your logic for booking the tickets
      // This can include making an API call, updating the database, etc.
      console.log('Booking details:', {
        busDetails,
        numberOfTickets,
        selectedPaymentOption,
      });
      alert('Booking Successful!'); // Replace this with your actual booking logic
    }
  </script>
  
  <div class="booking-container">
    <h2>Bus Details</h2>
    <p>Bus Name: {busDetails.companyName}</p>
    <p>Source: {busDetails.source}</p>
    <p>Destination: {busDetails.destination}</p>
  
    <h2>Booking Information</h2>
    <label for="tickets">Number of Tickets:</label>
    <input type="number" id="tickets" bind:value={numberOfTickets} min="1" />
  
    <label for="payment">Payment Option:</label>
    <select id="payment" bind:value={selectedPaymentOption}>
      <option value="credit_card">Credit Card</option>
      <option value="debit_card">Debit Card</option>
      <option value="upi">UPI</option>
    </select>
  
    <button on:click={handleBookNow}>Book Now</button>
  </div>
  
  <style>
    .booking-container {
      max-width: 600px;
      margin: auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      margin-top: 20px;
    }
  
    h2 {
      margin-top: 10px;
    }
  
    label {
      margin-top: 10px;
      display: block;
    }
  
    input,
    select,
    button {
      margin-top: 5px;
    }
  
    button {
      padding: 10px;
      background-color: #4285f4;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #3c78d8;
    }
  
    button:active {
      background-color: #356fce;
    }
  </style>
  