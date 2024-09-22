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

  let loading = false;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    // Reset states
    formState.success = false;
    formState.missing = false;
    formState.incorrect = false;
    formState.exists = false;
    loading = true;

    if (!email) {
      formState.missing = true;
      loading = false;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formState.incorrect = true;
      loading = false;
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
    } finally {
      loading = false;
    }

    // Clear email input
    formState.email = "";
  }
</script>

<div
  class="container-fluid text-green p-2 p-xl-5 p-lg-3 md:text-base lg:text-lg text-sm xl:w-[100%] lg:w-[94%] w-[95%] mx-auto"
>
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
            text2: "7/9 Molade Okoya Thomas, Victoria Island, Lagos",
          },
          {
            href: "mailto:hello@squaremetres.ng",
            icon: "bi-envelope-fill",
            text2: "hello@squaremetres.ng",
          },
          {
            href: "tel:+2348066267094",
            icon: "bi-telephone-fill",
            text2: "08066267094",
          },
        ]}
      />
    </div>
  </div>
</div>

<div
  class="container-fluid bg-[#F6FFFD] rounded-[20px] md:text-base lg:text-lg text-sm w-[90%] mx-auto"
>
  <div class="row mx-0">
    <div class="col-3 col-sm-4 mx-auto col-md-3 lg:mt-3 md:mt-10 mt-[38px]">
      <img
        src="/images/sqm-footer-logo.png"
        class="align-baseline"
        alt="logo"
        loading="lazy"
      />
    </div>
    <div
      class="col-9 col-sm-8 col-md-5 xl:mt-[74px] lg:mt-[76px] md:mt-[90px] sm:mt-14 mt-12"
    >
      <div
        class="content text-[#0d493d] text-nowrap xl:text-lg lg:text-lg md:text-sm sm:text-sm text-[10px] md:text-left text-end lg:leading-6 sm:leading-5 leading-3"
      >
        Join more than 1500 recipients of real <br /> estate updates and trends
      </div>
    </div>
    <div class="col-12 col-md-4 xl:mt-20 lg:mt-20 md:mt-[90px] pb-4">
      <div class="md:text-base lg:text-lg text-sm">
        <form on:submit|preventDefault={handleSubmit}>
          
          <div class="input-group">
            <input
              type="email"
              name="email"
              bind:value={formState.email}
              class="form-control text-xs md:text-sm text-[#0d493d] h-10"
              placeholder="Type your email address"
              required
            />
            <button
              type="submit"
              class="btn bg-[#0d493d] hover:bg-[#F96B29] lg:text-base md:text-sm text-xs text-[#f6fffd]"
              disabled={loading}
              >
              {#if loading}
              <span class="text-[#0d493d]">
                <span class="spinner-grow spinner-grow-sm text-[#f96b29] mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Signing up...
              </span>
                {:else}
                SIGN UP
              {/if}
              </button
            >
          </div>
          <!-- Display messages based on form submission state -->
          {#if formState.success}
            <div>
              <p class="success mt-2 lg:text-base md:text-sm text-xs text-[#F96B29]">
                Thank you for subscribing to our newsletter.
              </p>
            </div>
          {/if}
          {#if formState.missing}
            <p class="error text-warning">Please input an email address.</p>
          {/if}
          {#if formState.incorrect}
            <p class="error text-warning fw-bolder">
              The email address is not valid.
            </p>
          {/if}
          {#if formState.exists}
            <p class="error text-[#F96B29]">
              We already have you as a subscriber.
            </p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  .text-green {
    color: #0d493d;
  }
</style>
