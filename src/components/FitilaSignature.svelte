<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Form from "../shared/Form.svelte";
  import CardText from "../shared/CardText.svelte";
  import Modal from "../shared/Modal.svelte";
  import Img from "../shared/Img.svelte";
  import Carousel from "../shared/Carousel.svelte";
  import IconBox from "../shared/IconBox.svelte";
  import ProjectSummary from "../shared/ProjectSummary.svelte";

  let showModal = false;
  let formHeader = "";
  let formText = "";
  let fullName = "";
  let email = "";
  let phoneNumber = "";
  let date = "";
  let amount = "";

  function handleOpenForm(event) {
    const {
      formHeader: header,
      formText: text,
      fullName: name,
      email: mail,
      phoneNumber: phone,
      date: dt,
      amount: amt,
    } = event.detail;
    formHeader = header;
    formText = text;
    fullName = name;
    email = mail;
    phoneNumber = phone;
    date = dt;
    amount = amt;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="fitila_signatures1.jpg">
  <PageHead
    SpanContent="Fitila Signature "
    CardContent2="tells the story of your hardwork through Real Estate"
    CardContent3="And it is comprehensively delivered by our dedicated team to solidify your investment goals"
  >
    <div class="row mx-0 py-16 text-w float-start">
      <div class="col-lg-3 col-4 text-center">
        <p class="fw-light">Title</p>
        <p class="fw-bold my-2">Freehold</p>
      </div>
      <div class="col-lg-3 col-4 text-center">
        <p class="fw-light">size</p>
        <p class="fw-bold my-2">300sqm & 500sqm</p>
      </div>
      <div class="col-lg-3 col-4 text-center">
        <p class="fw-light">Location</p>
        <p class="fw-bold my-2">Ketu, Epe</p>
      </div>
      <div class="col-lg-3 col-12 text-nowrap text-center my-4 my-md-4 my-lg-1">
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

<section>
  <div class="container pt-5">
    <CardText
      TextHeader="About Fitila Signatures"
      TextContent={[
        {
          body: "Fitila Signature is a timeless piece of real estate investment experience, design with the future in mind for those who love fine living. it comes with features and facilities that completes you and elevate your living experience",
        },
        {
          body: "Poised to be one of the most organized settlement in its host community, Epe, which is also the fastest-selling and most sought-after area in Nigeria, it is more than offering you a destination but wholeness in a piecemeal",
        },
      ]}
    ></CardText>
  </div>
</section>

<section>
  <div class="container">
    <div class="row mx-0">
      <div class="col">
        <img src="images/fitila_signatures.jpg" alt="fitila signatures" class="rounded" loading="lazy" />
      </div>
    </div>
  </div>
</section>

<section class="text-sm md:text-base lg:text-lg">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12">
        <div
          class="text-[#F96B29] text-center text-xl md:text-2xl lg:text-3xl font-bold pt-5"
        >
          Specs and details
        </div>
      </div>
      <div class="col-12">
        <div class="row mx-0">
          <Img
            Images={[
              { src: "images/dry.png",
                alt: "dry land",
               },
              { src: "images/paved.png",
                alt: "paved road",
               },
              { src: "images/drainage.png",
                alt: "drainage system",
               },
              { src: "images/playGround.png",
                alt: "children's play area",
               },
              { src: "images/elect.png",
                alt: "electricity",
               },
              { src: "images/green.png",
                alt: "green area",
               },
              { src: "images/streetlight.png",
                alt: "street light",
               },
              { src: "images/gateHouse.png",
                alt: "gate house",
               },
              { src: "images/security.png",
                alt: "security",
               },
              { src: "images/perimeter.png",
                alt: "perimeter fencing",
               },
              { src: "images/management.png",
                alt: "management",
               },
              { src: "images/gym.png",
                alt: "gym",
               },
            ]}
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#0D493D] my-5">
  <div class="container">
    <div class="row mx-0 py-5">
      <Carousel
        Images1={[
          { src: "images/fitila_signatures1.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures2.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures3.jpg",
            alt: "fitila signatures",
           },
        ]}
        Images2={[
          { src: "images/fitila_signatures3.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures1.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures2.jpg",
            alt: "fitila signatures",
           },
        ]}
        Images3={[
          { src: "images/fitila_signatures2.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures3.jpg",
            alt: "fitila signatures",
           },
          { src: "images/fitila_signatures1.jpg",
            alt: "fitila signatures",
           },
        ]}
      ></Carousel>
    </div>
  </div>
</section>

<section class="bg-[#0D493D] my-5">
  <div class="container-fluid">
    <div class="row mx-0">
      <div class="col">
        <CardText
          BgGreen={{
            head: "Reasons to Invest",
            body: "As a limited time offer with limited slots available, invest and enjoy these exclusive benefits as we join hands to elevate your real estate experience at Fitila Signatures",
          }}
        ></CardText>
      </div>
      <div class="col-md-12">
        <div class="row mx-0">
          <IconBox
            IconDetails={[
              {
                src: "images/bestSeller.png",
                alt: "bestSeller",
                head: "Lagos’ Best Seller",
                body: "The best time to invest in Epe is now, as it stands as lagos’ fastest selling and most sought after area in Nigeria",
              },
              {
                src: "images/organized.png",
                alt: "organized",
                head: "Organized Settlement",
                body: "With a well planned layout with development and delivery at the fore front, your living experience is elevated",
              },
              {
                src: "images/legal.png",
                alt: "legal",
                head: "Legal & Documentation",
                body: "We ensure all processes are transparent and well documented for a hassle free experience",
              },
              {
                src: "images/roi.png",
                alt: "return on investment",
                head: "ROI Projection",
                body: "We believe you are being positioned to get a consistent rise in returns due to our development goals",
              },
            ]}
          ></IconBox>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-[#F6FFFDCC]">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12">
        <div class="text-[#F96B29] text-center text-3xl fw-bold">
          Project Summary
        </div>
      </div>
      <div class="col-12">
        <div class="row mx-0">
          <ProjectSummary
            ProjectDetails={[
              { head: "Type", body: "Mixed Development" },
              { head: "Size", body: "10 acres" },
              { head: "Location", body: "Ketu, Epe" },
              { head: "Status", body: "In progress" },
              { head: "Initial Deposit", body: "N500,000.00" },
              { head: "Timeline", body: "18 months" },
              { head: "Payment Plan", body: "Up-to-12 months" },
              { head: "Start Date", body: "Dec 2023" },
            ]}
          ></ProjectSummary>
        </div>
      </div>
      <div class="text-center mb-5">
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
      </div>
    </div>
  </div>
</section>

<Modal isOpen={showModal} close={closeModal}>
  <Form
    {formHeader}
    {formText}
    {fullName}
    {email}
    {phoneNumber}
    {date}
    {amount}
  />
</Modal>

<style>
</style>
