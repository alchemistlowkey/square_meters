<script>
  import InputField from "./InputField.svelte";
  import RadioGroup from "./RadioGroup.svelte";
  import { warning, failure, toastsuccess } from "../lib/js/toast-theme"; // Import custom toast functions

  export let formHeader = "";
  export let formText = "";
  export let fullName = "";
  export let email = "";
  export let phoneNumber = "";
  export let date = "";
  export let amount = "";
  export let preferredSize = "";
  export let message = "";

  let formState = {
    success: false,
    missing: false,
    incorrect: false,
    exists: false,
    email: "",
    fullName: "",
    phoneNumber: "",
    date: "",
    amount: "",
    preferredSize: "300sqm", // Default selection
    message: "",
  };

  let loading = false; // Loading state for better feedback

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Reset form states
    formState.success = false;
    formState.missing = false;
    formState.incorrect = false;
    formState.exists = false;
    loading = true;

    const email = formData.get("email");
    if (!email) {
      formState.missing = true;
      warning("Please fill in all fields."); // Custom warning toast
      loading = false;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formState.incorrect = true;
      failure("Please enter a valid email address."); // Custom failure toast
      loading = false;
      return;
    }

    // Before form reset
    const newFullName = formData.get("fullname");

    try {
      const response = await fetch("/db/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        formState.success = true;
        formState.fullName = newFullName;
        toastsuccess(`Thank you ${formState.fullName} for your submission. We will get back to you shortly.`); // Custom success toast

        // Reset form fields after successful submission
        formState.email = "";
        formState.phoneNumber = "";
        formState.date = "";
        formState.amount = "";
        formState.preferredSize = "300sqm";
        formState.message = "";
        event.target.reset(); // Reset the form after successful submission
      } else {
        const result = await response.json();
        if (result.exists) {
          formState.exists = true;
          warning("It looks like you already submitted this form."); // Custom warning toast
        } else {
          throw new Error("Submission failed");
        }
      }
    } catch (error) {
      failure("An error occurred during submission. Please try again later."); // Custom failure toast
      console.error("Form submission error:", error);
    } finally {
      loading = false; // Always stop loading, whether success or error
    }
  }
</script>

<section class="bg-white">
  <div class="container text-cgreen text-start fw-medium">
    <div class="row mx-0">
      <h1 class="fw-bold fs-2">{formHeader}</h1>
      <p class="text-uppercase fw-normal fs-6 mt-3">{formText}</p>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="row mx-0 my-4">
        {#if fullName}
          <InputField
            label={fullName}
            name="fullname"
            value={formState.fullName}
            required={true}
          />
        {/if}

        {#if email}
          <InputField
            label={email}
            name="email"
            value={formState.email}
            type="email"
            required={true}
          />
        {/if}
      </div>

      <div class="row mx-0 my-4">
        {#if phoneNumber}
          <InputField
            label={phoneNumber}
            name="phoneNumber"
            value={formState.phoneNumber}
            type="tel"
            required={true}
          />
        {/if}

        {#if date}
          <InputField
            label={date}
            name="date"
            value={formState.date}
            type="date"
            required={true}
          />
        {/if}

        {#if amount}
          <InputField
            label={amount}
            name="amount"
            value={formState.amount}
            type="number"
            required={true}
          />
        {/if}

        {#if message}
          <InputField
            label={message}
            name="message"
            value={formState.message}
            type="textarea"
            required={true}
          />
        {/if}
      </div>

      <!-- Preferred size radio buttons -->
      {#if preferredSize}
        <div class="row mx-0">
          <div>
            <p>Preferred Size</p>
            <RadioGroup
              options={[
                { value: "300sqm", label: "300sqm" },
                { value: "500sqm", label: "500sqm" },
                { value: "1000sqm", label: "1000sqm" },
              ]}
              name="preferredSize"
              selectedValue={formState.preferredSize}
              onChange={(value) => (formState.preferredSize = value)}
            />
          </div>
        </div>
      {/if}

      <div class="row mx-0">
        <div class="my-4 mb-4">
          <button
            type="submit"
            class="btn bg-[#f96b29] py-3 px-20 hover:bg-[#0d493d] border-[#0d493d] hover:border-[#f96b29] text-[#f6fffd] hover:text-[#f6fffd] flex items-center justify-center"
            disabled={loading}
          >
            {#if loading}
              <!-- Bootstrap spinner for loading -->
              <span class="text-[#0d493d]">
                <span
                  class="spinner-border spinner-border-sm text-[#f96b29] mr-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Submitting...
              </span>
            {:else}
              Submit
            {/if}
          </button>
        </div>
      </div>
    </form>
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
