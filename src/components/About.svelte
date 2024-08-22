<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
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
    <Button btnDetails="Know what we value"
    ></Button>
  </PageHead>
</Bg>

<section>
  <div class="container">
    <CardText
      TextHeader="Who We Are"
      TextContent="At Square Metres Construction Limited, we are passionate about driving
          a wholesome experience for you through timely project delivery,
          safeguarding your investment and guaranteeing high returns on your
          investment."
      TextContent2="Our Journey began with a simple yet profound goal which is to provide
          investors with an experience that truly reflects the potential of
          their real estate investment."
      TextContent3="We recognize that good real estate can complete ones living experience
          and increase life expectancy, giving ones life more meaning at old
          age."
    ></CardText>
  </div>
</section>

<div class="bg-green py-5 mt-lg-5 mt-3 container-fluid">
  <div class="container py-5">
    <div class="">
      <div class="mx-0">
        <div class="col-lg-12 px-0 text-lg-center">
          <span class="seamingly text-white">
            The right people can make anything Possible
          </span>
        </div>
        <div class="col-lg-8 offset-lg-2 px-0 text-lg-center pt-2">
          <span class="seamingly-text text-white"
            >Square Metres is managed by experienced professionals who are
            working collaboratively with a vast background in real estate
            investment and entrepreneurship.
          </span>
        </div>
      </div>
    </div>
    <div class="mt-lg-5 mt-3 col-lg-8 offset-2 px-0">
      <div class="row mx-0 justify-content-center">
        <div class="col-lg-6 mb-3">
          <a href="/" class="text-decoration-none">
            <div class="news_card text-lg-center">
              <img src="images/ceo.jpeg" class="rounded" alt="" />
              <div class="head">Oghe Ogheneriode I.</div>
              <div class="body">CEO</div>
            </div>
          </a>
        </div>
        <div class="col-lg-6 mb-3">
          <a href="/" class="text-decoration-none">
            <div class="news_card text-lg-center">
              <img src="images/ho.jpeg" class="rounded" alt="" />
              <div class="head">Raphael Obaro</div>
              <div class="body">Head of Operation</div>
            </div>
          </a>
        </div>
        <div class="col-lg-6 mb-3">
          <a href="/" class="text-decoration-none">
            <div class="news_card text-lg-center">
              <img src="images/hcv.jpeg" class="rounded" alt="" />
              <div class="head">Gbadeyan Oluwafemi</div>
              <div class="body">Head, Creative & Visuals</div>
            </div>
          </a>
        </div>

        <div class="col-lg-6 mb-3">
          <a href="/" class="text-decoration-none">
            <div class="news_card text-lg-center">
              <img src="images/cc.jpeg" class="rounded" alt="" />
              <div class="head">Cynthia Edosomwan</div>
              <div class="body">Corporate Comms</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<section>
  <div class="container">
    <CardText
      TextHeader="What Defines Us"
      TextContent="Our values define the SquareMetres culture, who we are, and why we do what we do. Shaping our interaction with all stakeholders: customers, regulators, investors, partners and our host communities."
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
