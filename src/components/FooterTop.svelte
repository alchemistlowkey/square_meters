<script>
import FooterText from "../shared/FooterText.svelte";
</script>

<section class="footer-top md:text-base lg:text-lg text-sm">
  <div class="container text-green p-2 p-xl-5 p-lg-3">
    <div class="row mx-0">
      <div class="col-md-3 col-4 mt-5">
        <FooterText
          FooterHead="What We Do"
          FooterItem={[
            { href: "/fitila-signature", text: "Fitila Signatures" },
            { href: "/investment", text: "Investment" },
            { href: "/agency", text: "Agency" },
          ]}
        />
      </div>
      <div class="col-md-2 col-lg-3 col-4 mt-5">
        <FooterText
          FooterHead="Who We Are"
          FooterItem={[
            { href: "/about-us", text: "About Us" },
            { href: "/career", text: "Career" },
            { href: "/blog", text: "Blog" },
          ]}
        />
      </div>
      <div class="col-md-3 col-4 mt-5">
        <FooterText
          FooterHead="Helpful Links"
          FooterItem={[
            { href: "/policy", text: "Terms of service" },
            { href: "/policy", text: "Policy service" },
            { href: "/faq", text: "FAQ’s" },
          ]}
        />
        
      </div>
      <div class="col-md-4 col-lg-3 col-sm-12 col-12 mt-5">
        <FooterText
          FooterHead="Contact Us"
          FooterItem={[
            {
              href: "https://www.google.com/maps/search/?api=1&query=7/9+Molade+Okoya+Thomas,+Victoria+Island,+Lagos",
              icon: "bi-building-fill",
              text: "7/9 Molade Okoya Thomas, Victoria Island, Lagos",
            },
            { href: "mailto:hello@squaremetres.ng",
              icon: "bi-envelope-fill",
            text: "hello@squaremetres.ng" },
            { href: "tel:+2348066267094",
              icon: "bi-telephone-fill",            
            text: "08066267094" },
          ]}
        />
        
      </div>
    </div>
  </div>

  <div class="container">
    <div class="bg-[#F6FFFD] m-0">
      <div class="row mx-0 py-0">
        <div class="col-4 mx-auto col-md-3">
          <div class="">
            <img
              src="/images/sqm-footer-logo.png"
              class="w-[120px] mt-md-3 m-0"
              alt="logo"
            />
          </div>
        </div>
        <div class="col col-md-4 pt-md-5 pt-3">
          <div
            class="content text-[#0d493d] md:text-sm lg:text-lg text-xs md:pt-0 mt-md-0 mt-3 md:text-left text-right md:leading-5 lg:leading-10 leading-5"
          >
            Join more than 1500 recipients of real estate updates and trends
          </div>
        </div>
        <div class="col-12 col-md-5 pt-md-5 mt-md-3 pt-0 mb-2">
          <div class="">
            <form action="" method="">
              <div class="input-group">
                <input
                  type="email"
                  name="email"
                  class="form-control text-xs md:text-sm text-[#0d493d]"
                  placeholder="Type your email address"
                />
                <button
                  type="submit"
                  class="btn bg-green text-white md:text-lg text-xs"
                  >SIGN UP</button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .text-green {
    color: #0d493d;
  }
  .bg-green {
    background-color: #0d493d;
  }
  .text-white {
    color: #f6fffd;
  }
</style>
