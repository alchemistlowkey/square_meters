<script>
  import FooterText from "../shared/FooterText.svelte";
  import { enhance } from "$app/forms";

  let formState = {
    success: false,
    missing: false,
    incorrect: false,
    exists: false,
    email: "",
  };
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    // Reset states
    formState.success = false;
    formState.missing = false;
    formState.incorrect = false;
    formState.exists = false;

    if (!email) {
      formState.missing = true;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formState.incorrect = true;
      return;
    }

    try {
      const response = await fetch("/db/newsletter", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        formState.success = true;
      } else {
        const result = await response.json();
        if (result.exists) {
          formState.exists = true;
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }

    // Clear email input
    formState.email = "";
  }
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
            {
              href: "mailto:hello@squaremetres.ng",
              icon: "bi-envelope-fill",
              text: "hello@squaremetres.ng",
            },
            {
              href: "tel:+2348066267094",
              icon: "bi-telephone-fill",
              text: "08066267094",
            },
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
            <form on:submit|preventDefault={handleSubmit}>
              <!-- Display messages based on form submission state -->
              {#if formState.success}
                <p class="success">
                  Thank you for subscribing to our newsletter.
                </p>
              {/if}
              {#if formState.missing}
                <p class="error">Please input an email address.</p>
              {/if}
              {#if formState.incorrect}
                <p class="error">The email address is not valid.</p>
              {/if}
              {#if formState.exists}
                <p class="error">We already have you as a subscriber.</p>
              {/if}
              <div class="input-group">
                <input
                  type="email"
                  name="email"
                  bind:value={formState.email}
                  class="form-control text-xs md:text-sm text-[#0d493d]"
                  placeholder="Type your email address"
                  required
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
