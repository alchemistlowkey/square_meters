<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Offer from "../shared/Offer.svelte";
  import DropCard from "./DropCard.svelte";
  import FaqCarousel from "../shared/FaqCarousel.svelte";
</script>

<Bg headerBG="faq.jpeg">
  <PageHead CardHeader="FAQ" CardContent="Got Questions? We’ve answers">
    <div class="row w-[70%] mx-auto">
      <div class="input-group mb-3">
        <button type="button" class="btn btn-light">
          <i class="bi-search"></i>
        </button>
        <input
          type="text"
          class="form-control"
          placeholder="What do you want to know?"
        />
      </div>
    </div>
  </PageHead>
</Bg>

<section>
  <div class="container">
    <div class="row mx-0 py-10 p-text text-cgreen text-center" id="positions">
      <DropCard
        DropHeader2="What do you want to know?"
        DropContent2="At Square Meters, we prioritize the well-being of our team because it's not only the right thing to do, as it is what empowers us to deliver our best work."
      />
      <DropCard
        DropHeader2="What types of properties does Square Metres specialize in?"
        DropContent2="Square Metres specializes in a wide range of properties, including residential homes, commercial spaces, land parcels, and luxury estates. Our diverse portfolio caters to various real estate needs."
      />
      <DropCard
        DropHeader2="What sets Square Metres apart from other real estate agencies?"
        DropContent2="Square Metres stands out through its commitment to excellence, market expertise, cutting-edge technology, and a customer-centric approach. We prioritize your unique needs and offer tailored solutions."
      />
      <DropCard
        DropHeader2="Are there any additional fees or hidden costs when working with Square Metres?"
        DropContent2="We believe in transparency. While there may be standard transaction fees, all costs are discussed upfront, ensuring no hidden charges. Our goal is to provide clarity and reliability."
      />
      <DropCard
        DropHeader2="How can I stay updated on the latest real estate trends and market insights?"
        DropContent2="Square Metres regularly publishes informative blogs, newsletters, and reports on our website, providing you with up-to-date industry knowledge and market trends."
      />
      <DropCard
        DropHeader2="How can I get in touch with Square Metres for further inquiries?"
        DropContent2="You can reach out to us through our website's contact form with the link below, call our customer support hotline at 08066267094, or visit our office. We're here to assist you."
        DropLink={{ text: "Contact Us", href: "/contact-us" }}
      />
    </div>
  </div>
</section>

<section class="text-sm md:text-base lg:text-lg mt-3">
  <div class="container">
    <div class="row mx-0">
      <div class="col-12">
        <div class="text-center text-[#F96B29]">
          <h2 class="fw-light">Testimonials</h2>
          <h1 class="fw-semibold text-base md:text-lg lg:text-xl">
            What is said about us
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>

<FaqCarousel
  Images1={[
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
  Images2={[
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
  Images3={[
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      alt: "emeka",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
/>

<Offer />

<style>
</style>
