<script>
  import Modal from "../shared/Modal.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let btnDetails = "";
  export let btnlink = "";
  export let formHeader = "";
  export let formText = "";
  export let fullName = "";
  export let email = "";
  export let phoneNumber = "";
  export let date = "";
  export let amount = "";
  export let preferredSize = "";
  export let message = "";
  export let fullLength = false;

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
      message,
    });
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="fs-4">
  <a
    class="btn bg-[#f96b29] hover:bg-[#0d493d] text-[#f6fffd] hover:text-[#f6fffd] border py-3 px-20 md:text-base lg:text-lg text-sm fw-medium"
    role="button"
    class:fullLength
    href={btnlink}
    on:click|preventDefault={openModal}
  >
    {btnDetails}
  </a>
</div>

<Modal isOpen={showModal} close={closeModal}>
  <slot />
</Modal>

<style>
  .fullLength {
    width: 100%;
  }
  /* .btn-xs {
    font-size: smaller;
  } */
</style>
