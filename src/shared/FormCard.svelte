<script>
  import { warning, failure, toastsuccess } from "../lib/js/toast-theme";

  let formState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    success: false,
    missingFields: false,
    incorrectEmail: false,
    exists: false,
    submissionError: false,
    loading: false, // Add loading flag
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");

    // Reset error states
    formState.success = false;
    formState.missingFields = false;
    formState.incorrectEmail = false;
    formState.exists = false;
    formState.submissionError = false;

    if (!firstName || !lastName || !email || !phoneNumber) {
      formState.missingFields = true;
      warning("Please fill in all fields."); // Show a warning toast
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formState.incorrectEmail = true;
      warning("Please enter a valid email address."); // Show a warning toast for invalid email
      return;
    }

    formState.loading = true; // Set loading to true when submission starts

    try {
      const response = await fetch("/db/formCard", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        formState.success = true;
        formState.firstName = firstName;
        formState.lastName = lastName;
        toastsuccess(`Thank you, ${firstName} ${lastName}, for registering as an agent!`); // Show success toast
        event.target.reset(); // Reset the form fields after successful submission
      } else if (result.exists) {
        formState.exists = true;
        formState.firstName = firstName;
        formState.lastName = lastName;
        warning(`Dear ${firstName} ${lastName}, you are already registered as an agent.`); // Show exists toast
      } else {
        formState.submissionError = true;
        failure("An error occurred during submission. Please try again."); // Show error toast
      }
    } catch (error) {
      formState.submissionError = true;
      failure("Submission failed. Please check your network and try again."); // Show error toast for network issue
      console.error("Form submission error:", error);
    } finally {
      formState.loading = false; // Set loading to false when submission completes
    }
  }

</script>

<form on:submit={handleSubmit}>
  <div class="row mx-0 fw-semibold text-base md:text-lg">
    <div class="col-12">
      <label for="firstname">First Name</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
        aria-required="true"
      />
    </div>
    <div class="col-12">
      <label for="lastname">Last Name</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
        aria-required="true"
      />
    </div>
    <div class="col-12">
      <label for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
        aria-required="true"
      />
    </div>
    <div class="col-12">
      <label for="phoneNumber">Phone Number</label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
        aria-required="true"
      />
    </div>
    <div class="col-12">
      <button
        type="submit"
        class="btn w-full bg-[#F96B29] hover:bg-[#0d493d] border-[#0d493d] hover:border-[#F96B29] text-[#F6FFFD] hover:text-[#f6fffd] rounded p-2 my-2 flex items-center justify-center"
        disabled={formState.loading}
      >
        {#if formState.loading}
          <span class="text-[#f96b29]">
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

  <!-- Optional: Display success message in the form -->
  {#if formState.success}
    <div class="text-[#0D493D] fw-semibold text-center mt-2">
      <p>Thank you, {formState.firstName} {formState.lastName}!</p>
    </div>
  {/if}
</form>

<style>
  /* Add any necessary styling */
</style>
