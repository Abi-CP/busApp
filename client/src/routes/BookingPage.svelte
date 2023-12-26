<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";
  import { loadStripe } from "@stripe/stripe-js";
  import { firebaseFirestore } from "../firebaseConfig";
  import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
  import { navigate } from "svelte-routing";
  import { busToBook } from "../js/stores";
  import Navigation from "../components/Navigation.svelte";

  let companyName,
    source,
    destination,
    sourceTime,
    destinationTime,
    distance,
    journeyDate,
    journeyTime,
    totalFare,
    busDetails;

  let elements;
  let stripe;
  let userId = "";
  let userEmail = "";
  let userName = "";

  let numberOfTickets = 1;
  let selectedPaymentOption = "credit_card";

  let loading = false;
  let uid;

  const stripePromise = loadStripe(
    "pk_test_51OQqOjSEuj1HRmQX8Ce2BE1cQCxyZgBbsdl4JvwvJ76BcOpj8qjgyGReK2jrDcPPtkTiBG4UM8xoU8VaLlF7z19A00y40YX77m"
  ).then((maybeStripe) => {
    stripe = maybeStripe;
    elements = stripe.elements();
    return stripe;
  });

  onMount(() => {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
      uid = currentUser.uid;
      console.log("User UID:", uid);
    } else {
      console.log("No user is currently signed in.");
    }
    console.log("Current User: " + currentUser);
    if (!currentUser) {
      navigate("/login");
    }
    // Subscribe to changes in the store when the component mounts
    getUserId();
    const unsubscribe = busToBook.subscribe((value) => {
      console.log("BusToBook in Booking Page:", value);
      busDetails = value;
      // @ts-ignore
      companyName = value.companyName;
      // @ts-ignore
      source = value.source;
      // @ts-ignore
      destination = value.destination;
      // @ts-ignore
      distance = value.distance;
      // @ts-ignore
      destinationTime = value.destinationTime;
      // @ts-ignore
      sourceTime = value.sourceTime;
      // @ts-ignore
      journeyDate = value.journeyDate;
      // @ts-ignore
      journeyTime = value.journeyTime;
      // @ts-ignore
      busDetails.journeyTime = journeyTime;
      // @ts-ignore
      totalFare = value.totalFare;
      // @ts-ignore
      busDetails.destinationTime = convertHours(value.destinationTime);
      // @ts-ignore
      busDetails.sourceTime = convertHours(value.sourceTime);
      // @ts-ignore
      busDetails.journeyTime = convertHours(value.journeyTime);
    });

    // Cleanup the subscription when the component is destroyed
    return unsubscribe;
  });

  function convertHours(minutes) {
    const days = parseInt(Math.floor(minutes / 1440).toFixed(0));
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

  const getUserId = onAuthStateChanged(getAuth(), async (user) => {
    console.log("Usr id func");
    if (user) {
      userId = user.uid;
      userEmail = user.email;
      userName = user.displayName;
      console.log(userName);
    } else {
      userId = null;
      userEmail = null;
      navigate("/login");
    }
  });

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
            amount: Math.round(totalCost(numberOfTickets, totalFare) * 100),
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
    } catch (error) {
      console.error("Error during payment:", error.message);
    }
  }

  async function handleBookNow() {
    // Implement your logic for booking the tickets
    // This can include making an API call, updating the database, etc.
    loading = true;
    console.log("Booking user: " + uid);
    console.log("Booking details:", {
      busDetails,
      numberOfTickets,
      selectedPaymentOption,
    });
    await handlePayment();
    // updateBookingCollection();
    await checkIfDocumentExists("bookings", uid);
    alert("Booking Successful!");
    loading = false;
    navigate("/my-bookings");
  }

  function checkValidCount() {
    if (numberOfTickets < 1) {
      alert("Number of Tickets can't be empty!");
      numberOfTickets = 1;
    } else if (numberOfTickets > 6) {
      alert("You Can Book only upto 6 tickets!");
      numberOfTickets = 6;
    }
  }

  let totalCost = (numberOfTickets, totalFare) => {
    return numberOfTickets * totalFare;
  };

  async function addFirebaseDocAndField() {
    const dateTime = new Date();
    const formattedDate = dateTime
      .toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      .split(", ")
      .join("T");

    const bookingJSON = {
      [formattedDate]: {
        dateOfBooking: formattedDate,
        numberOfTickets: numberOfTickets,

        busDetails: busDetails,
      },
    };

    const documentRef = doc(firebaseFirestore, "bookings", uid);

    try {
      await setDoc(documentRef, bookingJSON, { merge: true });
      console.log("Document successfully added or updated!");
    } catch (error) {
      console.error("Error adding or updating document: ", error);
    }
  }

  async function checkIfDocumentExists(collectionName, documentId) {
    const documentRef = doc(firebaseFirestore, collectionName, documentId);
    const dateTime = new Date();
    const bookingJSON = {
      dateOfBooking: new Date()
        .toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        .split(", ")
        .join("T"),
      numberOfTickets: numberOfTickets,
      busDetails: busDetails,
      newField: dateTime,
    };

    try {
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        // Document exists
        console.log("Document exists:", documentSnapshot.data());
        addFieldToDocument("bookings", uid, dateTime, bookingJSON);
      } else {
        // Document does not exist
        console.log("Document does not exist.");
        await addFirebaseDocAndField();
      }
    } catch (error) {
      console.error("Error checking document existence:", error);
    }
  }

  async function addFieldToDocument(
    collectionName,
    documentId,
    fieldName,
    fieldValue
  ) {
    const documentRef = doc(firebaseFirestore, collectionName, documentId);

    try {
      await updateDoc(documentRef, {
        [fieldName]: fieldValue,
      });
      console.log("Field added to the document successfully!");
    } catch (error) {
      console.error("Error adding field to the document:", error);
    }
  }

  // Example usage
</script>

<main>
  <div class="container">
    <Navigation />

    <div class="booking-container">
      <h2>Bus Details</h2>
      <p>Bus Name: {companyName}</p>
      <p>Source: {source}</p>
      <p>Destination: {destination}</p>
      <p>Source Time: {convertHours(sourceTime)}</p>
      <p>Destination Time: {convertHours(destinationTime)}</p>
      <p>Journey Time: {convertHours(journeyTime)}</p>

      <h2>Booking Information</h2>
      <p>User Name: {getAuth().currentUser.displayName}</p>
      <label for="tickets">Number of Tickets:</label>
      <input
        type="number"
        id="tickets"
        bind:value={numberOfTickets}
        on:change={checkValidCount}
        min="1"
        max="6"
      />

      <label for="payment">Payment Option:</label>
      <p>Total Cost: ₹{totalCost(numberOfTickets, totalFare)}</p>
      <select id="payment" bind:value={selectedPaymentOption}>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="upi">UPI</option>
      </select>

      {#if !loading}
        <button on:click={handleBookNow}>Book Now</button>
      {:else}
        <button disabled>Loading...</button>
      {/if}
    </div>
  </div>
</main>

<style>
  .container {
    margin-top: 20vh;
  }
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
