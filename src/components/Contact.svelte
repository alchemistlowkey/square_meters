<script>
  import CardText from "../shared/CardText.svelte";
  import Offer from "../shared/Offer.svelte";
</script>

<section class="pt-[100px]">
  <div class="container fw-bold">
    <div class="row mx-0">
      
      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 text-nowrap">
        <CardText
          TextHeader2="Head Office"
          TextLinkText="7/9 Molade Okoya Thomas, Victoria Island, Lagos."
          TextLink="https://www.google.com/maps/search/?api=1&query=7/9+Molade+Okoya+Thomas,+Victoria+Island,+Lagos"
        />
      </div>
    </div>
    <div class="rounded-lg">
      <img
        src="/images/address.png"
        class="p-3 rounded-lg"
        alt="map address"
        loading="lazy"
      />
    </div>
    <div class="row mx-0">
      <div class="col-12 collection text-center md:text-xl lg:text-3xl text-lg py-6">
        <h1>
          You can reach us at
        </h1>
      </div>
      <div class="col-6 text-nowrap">
        <CardText
          TextHeader2="Email Us"
          TextLinkText="hello@squaremetres.ng"
          TextLink="mailto:hello@squaremetres.ng"
        />
      </div>
      <div class="col-6 text-nowrap">
        <CardText
          TextHeader2="Call Us"
          TextLinkText="08066267094"
          TextLink="tel:+2348066267094"
        />
      </div>
    </div>
  </div>
</section>

<Offer />

<style>
</style>
