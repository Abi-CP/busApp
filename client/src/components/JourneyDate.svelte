<!-- JourneyDate.svelte -->

<script>
  export let dateInput = "";

  let today = new Date().toISOString().split("T")[0];
  let nextThreeMonths = new Date();
  nextThreeMonths.setMonth(nextThreeMonths.getMonth() + 3);
  let nextThreeMonthsRange = nextThreeMonths.toISOString().split("T")[0];

  function verifyDate() {
    let targetDate = new Date(dateInput);

    // Parse today and nextThreeMonths strings to Date objects
    let todayDate = new Date(today);
    let nextThreeMonthsDate = new Date(nextThreeMonthsRange);

    
    // Check if the target date is within the range
    if (targetDate >= todayDate && targetDate <= nextThreeMonthsDate) {
      console.log(todayDate)
      console.log("The target date is within the range.");
    } else {
      console.log("The target date is outside the range.");

      // Optionally, you can reset the dateInput to the minimum value
      dateInput = today;
    }
  }
</script>

<div class="input-container flex">
  <input
    type="date"
    id="date"
    class="input-field date"
    required
    bind:value={dateInput}
    min={today}
    max={nextThreeMonthsRange}
    on:input={verifyDate}
  />
</div>
