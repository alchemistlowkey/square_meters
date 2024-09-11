<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import ButtonId from "../shared/ButtonId.svelte";
  import CardText from "../shared/CardText.svelte";
  import Offer from "../shared/Offer.svelte";
  import BoxCard from "../shared/BoxCard.svelte";
</script>

<Bg headerBG="bg.jpeg">
  <PageHead
    CardHeader="About Us"
    CardContent="Building friendships with our customers for life"
    CardContent3="To put a smile on the faces of investors by delivering and improving the
        quality of work."
  >
    <ButtonId btnDetails="Know what we value" btnlink="#values"></ButtonId>
  </PageHead>
</Bg>

<section class="pt-5">
  <div class="container">
    <CardText
      TextHeader="Who We Are"
      TextContent={[
        {
          body: "At Square Metres Construction Limited, we are passionate about driving a wholesome experience for you through timely project delivery, safeguarding your investment and guaranteeing high returns on your investment.",
        },
        {
          body: "Our Journey began with a simple yet profound goal which is to provide investors with an experience that truly reflects the potential of their real estate investment.",
        },
        {
          body: "We recognize that good real estate can complete one's living experience and increase life expectancy, giving one's life more meaning at old age.",
        },
      ]}
    ></CardText>
  </div>
</section>

<section class="bg-[#0D493DF2]">
  <div class="container pt-4">
    <CardText
      BgGreen={{
        head: "The right people can make anything Possible",
        body: "Square Metres is managed by experienced professionals who are working collaboratively with a vast background in real estate investment and entrepreneurship.",
      }}
    ></CardText>

    <div class="mt-lg-5 mt-3 col-md-10 offset-md-1">
      <div class="row mx-0 justify-content-center">
        <div class="col-lg-6 col-12 mb-3">
          <div class="news_card text-lg-center text-center">
            <img src="images/ceo.jpeg" class="rounded" alt="" />
            <div class="head">Oghe Ogheneriode I.</div>
            <div class="body">CEO</div>
          </div>
        </div>
        <div class="col-lg-6 col-12 mb-3">
          <div class="news_card text-lg-center text-center">
            <img src="images/ho.jpeg" class="rounded" alt="" />
            <div class="head">Raphael Obaro</div>
            <div class="body">Head of Operation</div>
          </div>
        </div>
        <div class="col-lg-6 col-12 mb-3">
          <div class="news_card text-lg-center text-center">
            <img src="images/hcv.jpeg" class="rounded" alt="" />
            <div class="head">Gbadeyan Oluwafemi</div>
            <div class="body">Head, Creative & Visuals</div>
          </div>
        </div>

        <div class="col-lg-6 col-12 mb-3">
          <div class="news_card text-lg-center text-center">
            <img src="images/cc.jpeg" class="rounded" alt="" />
            <div class="head">Cynthia Edosomwan</div>
            <div class="body">Corporate Comms</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="values" class="pt-5">
  <div class="container">
    <CardText
      TextHeader="What Defines Us"
      TextContent={[
        {
          body: "Our values define the SquareMetres culture, who we are, and why we do what we do. Shaping our interaction with all stakeholders, customers, regulators, investors, partners and our host communities.",
        },
      ]}
    ></CardText>
  </div>
</section>

<section>
  <BoxCard
    BoxSrc="images/people.png"
    BoxHead="Customer-centric"
    BoxBody="Your view shapes our vision. focused on driving an experience that prioritizes you above all else across all touch points."
    BoxSrc1="images/innovationAbout.png"
    BoxHead1="Innovation"
    BoxBody1="Innovating for inclusivity, we thrive in creating spaces where diversity thrives. we not only stay ahead but lead, shaping a future where every corner of our developments reflects unity and forward-thinking inclusiveness."
  ></BoxCard>

  <BoxCard
    BoxSrc="images/badge.png"
    BoxHead="Project Delivery"
    BoxBody="Providing timely delivery is our promise, and every brick reflects our commitment to excellence."
    BoxSrc1="images/globe.png"
    BoxHead1="Connecting Lives"
    BoxBody1="Beyond real estate; we're crafting neighborhoods where lives intertwine and flourish, embodying our commitment to connecting lives beyond brick and mortar"
  ></BoxCard>
</section>

<Offer />

<style>
</style>
