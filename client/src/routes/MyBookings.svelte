<!-- MyBookings.svelte -->

<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { onMount } from "svelte";
  import { firebaseFirestore } from "../firebaseConfig";
  import { doc, getDoc } from "firebase/firestore";
  import Navigation from "../components/Navigation.svelte";
  import { navigate } from "svelte-routing/src/history";
  import { writable } from "svelte/store";
  import BookingCard from "../components/BookingCard.svelte";

  let userId = "";
  let bookings = writable([]);

  onMount(() => {
    console.log("Page: My bookings");

    const unsubscribe = onAuthStateChanged(getAuth(), async (currentUser) => {
      if (currentUser) {
        userId = currentUser.uid;
        console.log("User UID:", userId);
        await loadBookings("bookings", userId);
      } else {
        console.log("No user is currently signed in.");
        navigate("/login");
      }

      // Cleanup the subscription when the component is destroyed
      unsubscribe();
    });
  });

  async function loadBookings(collectionName, documentId) {
    const documentRef = doc(firebaseFirestore, collectionName, documentId);

    try {
      const documentSnapshot = await getDoc(documentRef);

      if (documentSnapshot.exists()) {
        // Document exists
        const documentData = documentSnapshot.data();
        const fieldNames = Object.keys(documentData);
        console.log("Document exists:", documentData);
        console.log("All fields:", fieldNames);

        // Update the 'bookings' store
        bookings.set(Object.values(documentData));
      } else {
        console.log("Document does not exist.");
      }
    } catch (error) {
      console.error("Error checking document existence:", error);
    }
  }
</script>

<main>
  <Navigation />
  <h1>My Bookings</h1>
  <div class="container">
    {#each $bookings as booking (booking.dateOfBooking)}
      <BookingCard {booking} />
    {/each}
  </div>
</main>

<style>
  h1{
    margin: 2vh 0 3vh 5vw;
  }
  main {
    margin-top: 15vh;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
