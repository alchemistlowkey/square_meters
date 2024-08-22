<script>
  export let isOpen = false;
  export let close = () => {};
</script>

{#if isOpen}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="container">
    <div class="row mx-0">
      <div class="modal" on:click={() => close()}>
        <div class="modal-content" on:click|stopPropagation>
          <span class="close text-end" on:click={() => close()}>&times;</span>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 1000px;
  }
  .close {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
  }
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>
