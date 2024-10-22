<script>
  import HomeText from "../shared/HomeText.svelte";
  import Img from "../shared/Img.svelte";
  import BoxCard from "../shared/BoxCard.svelte";
</script>

<section class="w-[90%] mx-auto my-5">
  <HomeText
    TextHeader="Invest Seamlessly"
    TextContent="Making your money is hard, investing it shouldn’t be"
  ></HomeText>

  <Img
    HomeImages={[
      { src: "land_2.jpg", text: "Land", href: "/fitila-signature" },
      { src: "investment.jpeg", text: "Investment", href: "/investment" },
      { src: "land2.png", text: "Other Listings", href: "/product" },
    ]}
  />
</section>

<section class="w-[90%] mx-auto">
  <HomeText
    TextHeader="We are SquareMetres"
    TextContent="We are bringing a new reality to the eye of those who appreciate
            quality investment and project delivery.We are building the future
            Today"
  ></HomeText>

  <BoxCard
    HomeBoxes={[
      {
        hover: "clienthover.svg",
        src: "client.svg",
        alt: "client",
        head: "You First",
        body: "Your view shapes our vision. focused on driving an experience that prioritizes you above all else.",
      },
      {
        hover: "quality.svg",
        src: "business.svg",
        alt: "business",
        head: "Quality & Timely Delivery",
        body: "Providing timely delivery is our promise, and every brick reflects our commitment to excellence.",
      },
      {
        hover: "thumb.png",
        src: "innovation.svg",
        alt: "innovation",
        head: "Innovation & Leadership",
        body: "Creating spaces where diversity thrives. Staying ahead, shaping a future that inspires",
      },
    ]}
  />
</section>

<style>
</style>
