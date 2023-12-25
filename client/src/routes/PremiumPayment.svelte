<!-- PremiumPayment.svelte -->

<script>
  import { onMount } from "svelte";
  import { getAuth } from "firebase/auth";
  import { loadStripe } from "@stripe/stripe-js";
  import { navigate } from "svelte-routing";
  import { getFirestore, doc, updateDoc } from "firebase/firestore";

  let stripe;
  let elements;
  let userId;
  let userEmail;
  let paymentAmount = 10.99;
  let amountInCents = Math.round(paymentAmount * 100);

  const stripePromise = loadStripe(
    "pk_test_51OQqOjSEuj1HRmQX8Ce2BE1cQCxyZgBbsdl4JvwvJ76BcOpj8qjgyGReK2jrDcPPtkTiBG4UM8xoU8VaLlF7z19A00y40YX77m"
  ).then((maybeStripe) => {
    stripe = maybeStripe;
    elements = stripe.elements();
    return stripe;
  });

  onMount(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        userId = user.uid;
        userEmail = user.email;
      } else {
        userId = null;
        userEmail = null;
        // Redirect or handle non-authenticated user
      }
      return () => {
        unsubscribe();
        // Clean up Stripe elements if needed
      };
    });

    return () => unsubscribe();
  });

  async function updateUserData() {
    try {
      const db = getFirestore();
      const userDocRef = doc(db, "users", userId);

      // Update the user document with the new data
      await updateDoc(userDocRef, {
        isPremium: true, // Update the field you want to change
        lastUpdate: new Date(), // Example: Update additional fields
      });

      console.log("User data updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  }

  async function handlePayment() {
    try {
      const response = await fetch(
        "http://localhost:3001/api/stripe/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            amount: amountInCents,
            currency: "usd",
          }),
        }
      );
      console.log(response);
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error response:", errorData);
        throw new Error(`Payment failed with status: ${response.status}`);
      }

      const data = await response.json();

      const { paymentIntent, error } = await stripe.confirmCardPayment(
        data.clientSecret,
        {
          payment_method: data.paymentMethodId,
        }
      );

      // if (error) {
      //   console.error("Error confirming payment:", error.message);
      // } else {
      console.log("Payment confirmed:", paymentIntent);
      console.log("User Id: " + userId)
      // Update isPremium status for the user in Firestore
      updateUserData()
      navigate("/account");
      // }
    } catch (error) {
      console.error("Error during payment:", error.message);
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
