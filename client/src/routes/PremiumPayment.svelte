<!-- PremiumPayment.svelte -->

<script>
    import { navigate } from 'svelte-routing';
  
    let userId = 'oG3vt01vbwVTz9JOJGnYyyjcZ6l2'; // You should replace this with the actual Firebase user ID
  
    async function handlePayment() {
      // Send a request to the server to initiate the payment process
      const response = await fetch('http://localhost:3001/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Include necessary payment information
        body: JSON.stringify({ userId, amount: 10.99 }),
      });
  
      if (response.ok) {
        // Payment successful, update premium status and redirect
        const data = await response.json();
        // Assume the user's premium status is updated in Firebase
        navigate('/account');
      } else {
        // Payment failed, handle error
        console.error('Payment failed');
      }
    }
  </script>
  
  <button class="premium" on:click={handlePayment}>Get Premium</button>
  
  <style>
    .premium {
      border: 1px solid black;
      background-color: #3f007a;
      color: white;
      padding: 0.2rem 1rem;
      margin: 0 5rem;
    }
  </style>
  