<script>
  import FooterSocial from "../shared/FooterSocial.svelte";
</script>

<section
  class="footer-bottom border-top mt-5 pt-3 pb-5 md:text-base lg:text-lg text-sm"
>
  <div class="container">
    <div class="row mx-0 text-[#0D493D]">
      <FooterSocial
        SocialItem={[
          {
            href: "https://www.instagram.com/squaremetresng/",
            icon: "bi-instagram",
          },
          {
            href: "https://web.facebook.com/squaremetresng",
            icon: "bi-facebook",
          },
          {
            href: "https://www.linkedin.com/company/square-meters-real-estate-limited?trk=feed_main-feed-card_feed-actor-name",
            icon: "bi-linkedin",
          },
          { href: "https://x.com/squaremetresng", icon: "bi-twitter" },
          {
            href: "https://www.youtube.com/@squaremetresng",
            icon: "bi-youtube",
          },
        ]}
      />
      <div
        class="col-6 col-md-6 text-[10px] md:text-base lg:text-lg float-end fw-semibold px-sm-0 pt-3"
      >
        <div class="float-end md:pr-[120px] sm:pr-[40px] pe-0">
          <p class="md:text-nowrap" data-wow-duration="1s">
            &copy; 2024 Squaremetres. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
</style>
