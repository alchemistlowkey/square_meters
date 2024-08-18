<script>
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import CardText from "../shared/CardText.svelte";
  import Offer from "../shared/Offer.svelte";
</script>

<section class="about-bg">
  <PageHead
    CardHeader="About Us"
    CardContent="Building friendships with our customers for life"
    CardContent3="To put a smile on the faces of investors by delivering and improving the
        quality of work."
  >
    <Button btnDetails={{ text: "Know what we value", link: "#values" }}
    ></Button>
  </PageHead>
</section>

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
<div class="container mt-4" id="values">
  <div class="w-100">
    <div class="col-lg-12 mt-2 text-lg-center">
      <span class="seamingly"> What Defines Us </span>
    </div>
    <div class="col-lg-8 offset-lg-2 px-0 mt-2">
      <!-- For more features use the AutoHTML plugin window in figma ... -->
      <div class="text-green text-lg-center text-left">
        Our values define the SquareMetres culture, who we are, and why we do
        what we do. Shaping our interaction with all stakeholders: customers,
        regulators, investors, partners and our host communities.
      </div>
    </div>
  </div>
</div>

<div class="container my-lg-5 pt-3">
  <div class="col-lg-8 offset-lg-2">
    <div class="mx-0 row">
      <div class="col-lg-6 mb-3">
        <div class="about_define_box">
          <div class="image">
            <img src="images/people.png" alt="" />
          </div>
          <div class="title my-3">Customer-centric</div>
          <div class="body text-green">
            Your view shapes our vision. focused on driving an experience that
            prioritizes you above all else across all touch points.
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-3">
        <div class="about_define_box">
          <div class="image">
            <img src="images/innovation.png" alt="" />
          </div>
          <div class="title my-3">Innovation</div>
          <div class="body text-green">
            Innovating for inclusivity, we thrive in creating spaces where
            diversity thrives. we not only stay ahead but lead, shaping a future
            where every corner of our developments reflects unity and
            forward-thinking inclusiveness.
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-3">
        <div class="about_define_box">
          <div class="image">
            <img src="images/badge.png" alt="" />
          </div>
          <div class="title my-3">Project Delivery</div>
          <div class="body text-green">
            Providing timely delivery is our promise, and every brick reflects
            our commitment to excellence.
          </div>
        </div>
      </div>

      <div class="col-lg-6 mb-3">
        <div class="about_define_box">
          <div class="image">
            <img src="images/globe.png" alt="" />
          </div>
          <div class="title my-3">Connecting Lives</div>
          <div class="body text-green">
            Beyond real estate; we're crafting neighborhoods where lives
            intertwine and flourish, embodying our commitment to connecting
            lives beyond brick and mortar
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Offer />

<style>
  .about-bg {
    background-image: linear-gradient(#0000009e, #001410),
      url("../lib/img/bg.jpeg");
    background-size: cover;
    background-position: center;
  }
</style>
