<script>
  import HomeText from "../shared/HomeText.svelte";
  import Img from "../shared/Img.svelte";
</script>

<section class="md:text-2xl lg:text-4xl text-base w-[90%] mx-auto">
  <HomeText
    TextHeader="Invest Seamlessly"
    TextContent="Making your money is hard, investing it shouldn’t be"
  ></HomeText>

  <Img 
  HomeImages={[
    {src: "land_2.jpg",
      text: "Land",
      href: "/fitila-signature"

    },
    {src: "investment.jpeg",
      text: "Investment",
      href: "/investment"
    },
    {src: "investment.jpeg",
      text: "Other Listings",
      href: "/investment"
    }
  ]}
  />

  <HomeText
    TextHeader="We are SquareMetres"
    TextContent="We are bringing a new reality to the eye of those who appreciate
            quality investment and project delivery.We are building the future
            Today"
  ></HomeText>

  <div class="mt-4">
    <div class="row mx-0 md:text-base lg:text-lg text-sm">
      <div class="col-md-4 mb-lg-0 mb-3">
        <div class="white-box">
          <img src="images/client.png" alt="" />
          <div class="head">You First</div>

          <div class="body">
            Your view shapes our vision. focused on driving an experience that
            prioritizes you above all else.
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-lg-0 mb-3">
        <div class="danger-box">
          <img src="images/quality.png" alt="" />
          <div class="head">Quality & Timely Delivery</div>

          <div class="body">
            Providing timely delivery is our promise, and every brick reflects
            our commitment to excellence.
          </div>
        </div>
      </div>

      <div class="col-md-4 mb-lg-0 mb-3">
        <div class="white-box">
          <img src="images/innovation.png" alt="" />
          <div class="head">Innovation & Leadership</div>

          <div class="body">
            Creating spaces where diversity thrives. Staying ahead, shaping a
            future that inspires
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
