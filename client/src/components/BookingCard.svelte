<!-- BookingCard.svelte -->

<script>
    export let booking;
  </script>
  
  <div class="booking-card">
    <h2>{booking.busDetails.companyName}</h2>
    <p>Source: {booking.busDetails.source}</p>
    <p>Destination: {booking.busDetails.destination}</p>
    <p>Journey Date: {booking.busDetails.journeyDate}</p>
    <p>Source Time: {booking.busDetails.sourceTime}</p>
    <p>Journey Time: {booking.busDetails.journeyTime}</p>
    <p>Total Fare: ₹{booking.busDetails.totalFare}</p>
    <p>Number of Tickets: {booking.numberOfTickets}</p>
    <p>Date of Booking: {booking.dateOfBooking}</p>
  </div>
  
  <style>
    .booking-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      margin: 16px;
    }
  
    h2 {
      margin-bottom: 8px;
    }
  </style>
  