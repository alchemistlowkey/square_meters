<script>
  export let isOpen = false;
  export let videoUrl = "";
  export let close = () => {};
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="modal" on:click={() => close()}>
    <div class="modal-content" on:click|stopPropagation>
      <span class="close text-end" on:click={() => close()}>&times;</span>
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe
        width="100%"
        height="400"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
{/if}

<style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .modal-content {
    background-color: #0D493D;
    margin: 10% auto;
    padding: 0px;
    border: 1px solid #F96B29;
    width: 80%;
    max-width: 800px;
  }
  .close {
    color: #F96B29;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    padding-right: 10px;
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
  }
</style>
