<script>
  import Modal from "../../shared/Modal.svelte";
  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<button on:click={openModal}>Open Modal</button>

<Modal isOpen={showModal} close={closeModal}>
  <form action="">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" />
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" />
    <input type="submit" value="Submit" />
  </form>
</Modal>
