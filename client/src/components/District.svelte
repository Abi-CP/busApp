<script>
  export let itemLabel;
  export let highlighted;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li class="autocomplete-items" class:autocomplete-active={highlighted} on:click>
  {@html itemLabel}
</li>

<style>
  li.autocomplete-items {
    list-style: none;
    border-bottom: 1px solid #d4d4d4;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
  }

  li.autocomplete-items:hover {
    /*when hovering an item:*/
    background-color: #81921f;
    color: white;
  }

  li.autocomplete-items:active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important;
    color: #ffffff;
  }

  .autocomplete-active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important;
    color: #ffffff;
  }
</style>
