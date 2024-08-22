<script>
  import Modal from "../shared/Modal.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let btnDetails = "";
  export let formHeader = "";
  export let formText = "";
  export let fullName = "";
  export let email = "";
  export let phoneNumber = "";
  export let date = "";
  export let amount = "";
  export let preferredSize = "";

  let showModal = false;

  function openModal() {
    // Dispatch the event with form details
    dispatch("openform", {
      formHeader,
      formText,
      fullName,
      email,
      phoneNumber,
      date,
      amount,
      preferredSize,
    });
  }

  function closeModal() {
    showModal = false;
  }
</script>

<button class="btn btn-xs privacy-btn text-w" on:click={openModal}>
  {btnDetails}
</button>

<Modal isOpen={showModal} close={closeModal}>
  <slot />
</Modal>

<style>
  .privacy-btn:hover {
    background-color: #f96b29;
  }
  .btn-xs {
    font-size: smaller;
  }
</style>
