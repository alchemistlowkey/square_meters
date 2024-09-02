<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Offer from "../shared/Offer.svelte";
  import Modal from "../shared/Modal.svelte";
  import Form from "../shared/Form.svelte";
  import CardText from "../shared/CardText.svelte";
  import IconBox from "../shared/IconBox.svelte";

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

<section>
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
</section>

<section>
  <div class="container pt-5">
    <CardText
      TextHeader="Summary"
      TextContent={[
        {
          body: "You’re set to be a part of the biggest co-ownership initiative in Nigeria, with a profit-sharing initiative powered by driving real estate development for its investors.",
        },
        {
          body: "The initiative is based on funding developments & early project delivery thereby guaranteeing an incredible opportunity to get an ROI of up to 30% in 12 months. This opportunity outperforms treasury bills, Bonds and stocks combined.",
        },
      ]}
    ></CardText>
  </div>
</section>

<section class="bg-[#0D493D] my-5">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12">
        <CardText
          BgGreen={{
            head: "Reasons to Invest",
            body: "As a limited time offer with limited slots available, invest and enjoy these exclusive benefits as we join hands to elevate the real estate experience of the common man",
          }}
        ></CardText>
      </div>
      <div class="col-md-12">
        <div class="row mx-0">
          <IconBox
            IconDetails={[
              {
                src: "images/bestSeller.png",
                head: "Steady Cash Flow",
                body: "SquareMetres offer provides an opportunity for anyone to increase their passive income, regardless of their financial background or means. It allows individuals to dip their toes in the real estate investment pool.",
              },
              {
                src: "images/organized.png",
                head: "Minimum Investment",
                body: "Our offerings provide an attractive investment opportunity with high yield returns and minimal start-up costs. With just ₦50,000, you can invest in real estate assets, ensuring a secure investment.",
              },
              {
                src: "images/legal.png",
                head: "Payback Priority",
                body: "Our investment options provide superior payback priority over common equity property owners. The objective of Square Metres is to offer investors a reliable and risk-adjusted income stream with capital protection.",
              },
              {
                src: "images/roi.png",
                head: "Ownership Option",
                body: "Accumulate to own, A roadmap to Property Acquisition, own it in fractions. We encourage fractional ownership which allows you to invest at your own pace conveniently.",
              },
            ]}
          ></IconBox>
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
  <Form {formHeader} {formText} {fullName} {email} {phoneNumber} {amount} />
</Modal>

<Offer />

<style>
  
</style>
