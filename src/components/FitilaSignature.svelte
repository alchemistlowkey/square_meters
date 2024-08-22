<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Form from "../shared/Form.svelte";
  import CardText from "../shared/CardText.svelte";
  import Modal from "../shared/Modal.svelte";

  let showModal = false;
  let formHeader = "";
  let formText = "";
  let fullName = "";
  let email = "";
  let phoneNumber = "";
  let date = "";

  function handleOpenForm(event) {
    const {
      formHeader: header,
      formText: text,
      fullName: name,
      email: mail,
      phoneNumber: phone,
      date: dt,
    } = event.detail;
    formHeader = header;
    formText = text;
    fullName = name;
    email = mail;
    phoneNumber = phone;
    date = dt;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="investment-page-bg.jpeg">
  <PageHead
    SpanContent="Fitila Signature "
    CardContent2="tells the story of your hard work through Real Estate"
    CardContent3="And it is comprehensively delivered by our dedicated team to solidify your investment goals"
  >
    <div class="row mx-0 py-16 text-w">
      <div class="col mx-auto text-center">
        <p class="fw-light">Title</p>
        <p class="fw-bold my-2">Freehold</p>
      </div>
      <div class="col mx-auto text-center">
        <p class="fw-light">size</p>
        <p class="fw-bold my-2">300sqm & 500sqm</p>
      </div>
      <div class="col mx-auto text-center">
        <p class="fw-light">Location</p>
        <p class="fw-bold my-2">Ketu, Epe</p>
      </div>
      <div class="col text-nowrap text-center my-4 my-md-4 my-lg-1">
        <Button
          btnDetails="Schedule an inspection"
          formHeader="Schedule Inspection"
          formText="For Fitila Signatures"
          fullName="Full Name"
          email="Email"
          phoneNumber="Phone Number"
          date="Date"
          on:openform={handleOpenForm}
        />
      </div>
    </div>
  </PageHead>
</Bg>

<Modal isOpen={showModal} close={closeModal}>
  <Form {formHeader} {formText} {fullName} {email} {phoneNumber} {date} />
</Modal>

<section>
  <div class="container">
    <CardText
      TextHeader="About Fitila Signatures"
      TextContent="Fitila Signature is a timeless piece of real estate investment experience, design with the future in mind for those who love fine living. it comes with features and facilities that completes you and elevate your living experience"
      TextContent2="Poised to be one of the most organized settlement in its host community, Epe, which is also the fastest-selling and most sought-after area in Nigeria, it is more than offering you a destination but wholeness in a piecemeal"
    />
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
