<script>
  import FooterSocial from "../shared/FooterSocial.svelte";
</script>

<div
  class="container mt-5 pb-5 md:text-base lg:text-lg text-sm lg:w-[95%] mx-auto"
>
  <div class="row mx-0 text-[#0D493D] d-flex justify-content-between align-items-center">
    <div class="col-4 pt-3">
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
    </div>
    <div
      class="col-8 pt-3 text-end text-[clamp(8px,2vw,20px)] fw-medium"
    >
      &copy;2024 Squaremetres. All rights reserved
    </div>
  </div>
</div>

<style>
  
</style>
