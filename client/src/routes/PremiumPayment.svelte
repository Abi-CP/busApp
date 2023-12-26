<script>
  import { onMount } from "svelte";
  import { getAuth } from "firebase/auth";
  import { loadStripe } from "@stripe/stripe-js";
  import { navigate } from "svelte-routing";
  import { firebaseFirestore } from "../firebaseConfig";
  import { doc, getDoc, setDoc, collection, addDoc } from "firebase/firestore";

  let stripe;
  let elements;
  let userId;
  let userEmail;
  let premiumUser = false;
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
    const unsubscribe = getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        userId = user.uid;
        userEmail = user.email;
        await checkPremiumStatus();
      } else {
        userId = null;
        userEmail = null;
        navigate("/login");
        // Redirect or handle non-authenticated user
      }
      return () => {
        unsubscribe();
        // Clean up Stripe elements if needed
      };
    });

    return () => unsubscribe();
  });

  async function updatePremiumUsersCollection() {
    try {
      await setDoc(doc(firebaseFirestore, "/premiumUsers", userId), {
        userid: userId,
      });
      console.log("Document written with ID: ", userId);
      premiumUser = true;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function handlePayment() {
    if (!premiumUser) {
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
              currency: "inr",
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

        // Update isPremium status for the user in Firestore
        updatePremiumUsersCollection();
        navigate("/account");
        // }
      } catch (error) {
        console.error("Error during payment:", error.message);
      }
    }
  }

  onMount(checkPremiumStatus);

  async function checkPremiumStatus() {
    const docRef = doc(firebaseFirestore, "premiumUsers", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Already a premium user!");
      premiumUser = true;
    }
  }
</script>

{#if premiumUser}
  <button
    class="premium"
    on:click={() => alert("Yaay! You're already a Premium User!")}
    >Premium</button
  >
{:else}
  <button class="get-premium" on:click={handlePayment}>Get Premium</button>
{/if}

<style>
  .premium {
    border: 1px solid black;
    background-color: #0b4500;
    color: white;
    padding: 0.2rem 1rem;
    margin: 0 5rem;
  }
  .get-premium {
    border: 1px solid black;
    background-color: #3f007a;
    color: white;
    padding: 0.2rem 1rem;
    margin: 0 5rem;
  }
</style>
