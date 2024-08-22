<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Modal from "../shared/Modal.svelte";
  import Form from "../shared/Form.svelte";

  let showModal = false;
  let formHeader = "";
  let formText = "";
  let fullName = "";
  let email = "";
  let phoneNumber = "";
  let preferredSize = "";

  function handleOpenForm(event) {
    const {
      formHeader: header,
      formText: text,
      fullName: name,
      email: mail,
      phoneNumber: phone,
      preferredSize: size,
    } = event.detail;
    formHeader = header;
    formText = text;
    fullName = name;
    email = mail;
    phoneNumber = phone;
    preferredSize = size;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="privacy.jpeg">
  <PageHead
    CardContent="The best returns come from
investing in yourself"
    CardContent3="Join today to prioritize your clients, close more deals like never before
and enhance your earnings."
  >
    <Button
      btnDetails="Apply now to Join"
      formHeader="Request information"
      formText="For Fitila Signatures"
      fullName="Full Name"
      email="Email"
      phoneNumber="Phone Number"
      preferredSize="Preferred Size"
      on:openform={handleOpenForm}
    />
  </PageHead>
</Bg>

<Modal isOpen={showModal} close={closeModal}>
  <Form
    {formHeader}
    {formText}
    {fullName}
    {email}
    {phoneNumber}
    {preferredSize}
  />
</Modal>

<style>
</style>
