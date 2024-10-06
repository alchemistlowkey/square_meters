<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import CardText from "../shared/CardText.svelte";
  import IconBox from "../shared/IconBox.svelte";
  import ListItem from "../shared/ListItem.svelte";
  import FormCard from "../shared/FormCard.svelte";
  import ButtonId from "../shared/ButtonId.svelte";
</script>

<Bg headerBG="privacy.jpeg">
  <PageHead
    CardContent="The best returns come from
investing in yourself"
    CardContent3="Join today to prioritize your clients, close more deals like never before
and enhance your earnings."
  >
    <ButtonId btnDetails="Apply now to Join" btnlink="#agent" />
  </PageHead>
</Bg>

<section>
  <div class="container-fluid pt-5">
    <CardText
      TextHeader="Welcome"
      TextContent={[
        {
          body: "We are building a community that is passion-driven, to make available the best consultancy service for clients, realtor’s and real estate enthusiast.",
        },
        {
          body: "With learning and development at the forefront, we hope to have more ambassadors of the brand by committing to you knowledge base, help with networking and necessary skills and materials.",
        },
        {
          body: "Everyone’s real estate experience was induced by someone, Lets embark on a Journey to create happiness and relieve though real estate together",
        },
      ]}
    ></CardText>
  </div>
</section>

<section class="bg-[#0D493D] my-5 lg:text-lg md:text-base text-sm">
  <div class="container-fluid">
    <div class="row mx-0">
      <div class="col">
        <CardText
          BgGreen={{
            head: "Benefits",
            body: "Anyone in real estate or finance, including agents, property managers, dealmakers, Lawyers, and Bankers, can apply! Once submitted, we'll review your application within 24 hours.",
          }}
        ></CardText>
      </div>
      <div class="col-md-12">
        <div class="row mx-0">
          <IconBox
            IconDetails={[
              {
                src: "images/premium.png",
                alt: "premium",
                head: "One-of-a-kind opportunity",
                body: "Connect interested property buyers with Square Metres. Earn up to ₦500,000 per property transaction, which you can reinvest in the project.",
              },
              {
                src: "images/handshake.png",
                alt: "handshake",
                head: "Close 2x more Deals",
                body: "Maximize your potential for closing deals and expanding your wealth",
              },
              {
                src: "images/finance.png",
                alt: "finance",
                head: "Build Equity",
                body: "Boost your credibility by being part of significant development projects, accumulating equity to build your portfolio, and earning income while gaining appreciation.",
              },
              {
                src: "images/profits.png",
                alt: "profits",
                head: "Profits",
                body: "Earn up to ₦5million monthly in sales commission and be on your way to become a property owner as you can convert your earnings to any of our Project.",
              },
            ]}
          ></IconBox>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-5 text-sm md:text-base lg:text-lg w-[90%] mx-auto">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12 col-md-6 col-lg-7">
        <div class="text-[#F96B29] fw-bold text-start md:text-2xl text-lg pb-4">
          It takes only 5 minutes
        </div>
        <ListItem
          Lists={[
            { Number: "1", Text: "Sign Up Below" },
            { Number: "2", Text: "Get a confirmation" },
            { Number: "3", Text: "Start earning by selling and referring" },
          ]}
        ></ListItem>
      </div>
      <div class="col-12 col-md-6 col-lg-5">
        <div>
          <img
            src="images/agency.jpeg"
            class="rounded"
            alt="Agency"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<section id="agent">
  <div class="container my-5">
    <div class="row mx-0">
      <div
        class="col-12 text-[#F96B29] text-base md:text-xl lg:text-2xl text-center py-3 fw-semibold"
      >
        <h1>Agent Form</h1>
      </div>
      <div class="row mx-0">
        <div class="col-12 col-lg-8 offset-lg-2">
          <FormCard
            firstName="First Name"
            lastName="Last Name"
            email="Email"
            phoneNumber="Phone number"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
