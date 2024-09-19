<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Offer from "../shared/Offer.svelte";
  import Modal from "../shared/Modal.svelte";
  import Form from "../shared/Form.svelte";
  import CardText from "../shared/CardText.svelte";
  import IconBox from "../shared/IconBox.svelte";
  import ListItem from "../shared/ListItem.svelte";

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

<section class="py-5 text-sm md:text-base lg:text-lg">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12 col-md-6 col-lg-7">
        <div
          class="text-[#F96B29] fw-bold text-center md:text-2xl text-lg pb-4"
        >
          Highlights
        </div>
        
        <ListItem
          Lists={[
            {
              Number: "1",
              Text: "Short-term, high-yield real estate debt investments accessible to all.",
            },
            { Number: "2", Text: "Earn a 25% annual interest." },
            {
              Number: "3",
              Text: "Collateralized by Fitila Signature(Mixed use Land Project)",
            },
            {
              Number: "4",
              Text: "SquareMetres take priority in payback over underlying common equity.",
            },
            {
              Number: "5",
              Text: "Fitila Signatures consistently generate higher risk-adjusted returns compared to other property types.",
            },
            { Number: "6", Text: "Competitive return of 20bps plus Inflation" },
            {
              Number: "7",
              Text: "$5k min investment & quarterly distributions.",
            },
            {
              Number: "8",
              Text: "Also can be a roadmap to Property Acquisition, own it in fractions.",
            },
          ]}
        ></ListItem>
      </div>
      <div
        class="col-12 col-md-6 col-lg-5 text-sm md:text-base lg:text-lg border-[#0D493D] border-3 rounded fw-semibold"
      >
        <div class="row mx-0">
          <div class="col-12 fw-semibold py-4 p-0">Make an investment</div>
          <div class="col-12 border-c rounded">
            <img
              src="images/investment-terms.png"
              alt="investment"
              class="mx-auto d-block"
            />
          </div>
          <div class="col-12 fw-semibold py-4 p-0">Investment Terms</div>
          <div class="col-12 p-0 pb-5">
            <div class="row mx-0">
              <div class="col-6 p-0">
                <ul>
                  <li class="py-2">
                    Interest <span class="fw-medium"> : 25%</span>
                  </li>
                  <li class="py-2">
                    Payment <span class="fw-medium">: Annually</span>
                  </li>
                  <li class="py-2">
                    Terms <span class="fw-medium">: 12 Months</span>
                  </li>
                </ul>
              </div>
              <div class="col-6 text-end">
                <ul>
                  <li class="py-2">
                    Min Investment <span class="fw-medium">: ₦50,000</span>
                  </li>
                  <li class="py-2">
                    Holding Period <span class="fw-medium">: 12 Months</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-12 fw-semibold py-4 p-0 border-tb">
            <div class="row mx-0">
              <div class="col-6 p-0">
                Invest
                <div class="py-2">
                  <span class="fw-medium">min : ₦50,000</span>
                </div>
              </div>
              <div class="col-6 p-3 text-end border-c rounded fw-medium">
                ₦50,000
              </div>
            </div>
          </div>
          <div class="col-12 fw-semibold py-2 p-0 pt-4">
            <Button
              fullLength={true}
              btnDetails="Reserve a Slot"
              formHeader="Invest"
              formText="Backed by Fitila Signatures"
              fullName="Full Name"
              email="Email"
              phoneNumber="Phone Number"
              amount="Amount"
              on:openform={handleOpenForm}
            ></Button>
          </div>
          <div class="col-12 fw-semibold p-0 my-2">
            <a href="/faq" target="_blank" class="text-[#F96B29]"
              ><button class="w-full p-3 rounded border-o hover:bg-[#0d493d]"
                >Ask a question?</button
              ></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
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
  <div class="container-fluid">
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
                alt: "bestSeller",
                head: "Steady Cash Flow",
                body: "SquareMetres offer provides an opportunity for anyone to increase their passive income, regardless of their financial background or means. It allows individuals to dip their toes in the real estate investment pool.",
              },
              {
                src: "images/organized.png",
                alt: "organized",
                head: "Minimum Investment",
                body: "Our offerings provide an attractive investment opportunity with high yield returns and minimal start-up costs. With just ₦50,000, you can invest in real estate assets, ensuring a secure investment.",
              },
              {
                src: "images/legal.png",
                alt: "legal",
                head: "Payback Priority",
                body: "Our investment options provide superior payback priority over common equity property owners. The objective of Square Metres is to offer investors a reliable and risk-adjusted income stream with capital protection.",
              },
              {
                src: "images/roi.png",
                alt: "return on investment",
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
  .border-tb {
    border-top: 2px solid #e2e2e2 !important;
    border-bottom: 2px solid #e2e2e2 !important;
  }
  .border-c {
    border: 2px solid #e2e2e2 !important;
  }
  .border-o {
    border: 1px solid #f2c5b0 !important;
  }
</style>
