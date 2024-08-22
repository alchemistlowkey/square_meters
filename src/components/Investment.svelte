<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Offer from "../shared/Offer.svelte";
  import Modal from "../shared/Modal.svelte";
  import Form from "../shared/Form.svelte";

  let showModal = false;
  let formHeader = "";
  let formText = "";
  let fullName = "";
  let email = "";
  let phoneNumber = "";
  let amount = "";

  function handleOpenForm(event) {
    const {
      formHeader: header,
      formText: text,
      fullName: name,
      email: mail,
      phoneNumber: phone,
      amount: amt,
    } = event.detail;
    formHeader = header;
    formText = text;
    fullName = name;
    email = mail;
    phoneNumber = phone;
    amount = amt;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="investment-page-bg.jpeg">
  <PageHead
    CardContent="Invest in "
    SpanContent="Fitila Signatures "
    CardContent2="through short-term real estate debt that yield high returns."
  >
    <Button
      btnDetails="Reserve a Slot"
      formHeader="Invest"
      formText="Backed by Fitila Signatures"
      fullName="Full Name"
      email="Email"
      phoneNumber="Phone Number"
      amount="Amount"
      on:openform={handleOpenForm}
    />
  </PageHead>
</Bg>

<Modal isOpen={showModal} close={closeModal}>
  <Form {formHeader} {formText} {fullName} {email} {phoneNumber} {amount} />
</Modal>

<Offer />

<style>
</style>
