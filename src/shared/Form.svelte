<script>
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

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Reset states
    formState.success = false;
    formState.missing = false;
    formState.incorrect = false;
    formState.exists = false;

    const email = formData.get("email");
    if (!email) {
      formState.missing = true;
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formState.incorrect = true;
      return;
    }

    // before reset
    const newFullname = formData.get("fullname");

    try {
      const response = await fetch("/db/form", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        formState.success = true;
        formState.fullName = newFullname;
        // Reset form state
        formState.email = "";
        formState.phoneNumber = "";
        formState.date = "";
        formState.amount = "";
        formState.preferredSize = "300sqm"; // Reset to default selection
        formState.message = "";
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
  }
</script>

<section class="bg-white">
  <div class="container text-cgreen text-start fw-medium">
    <div class="row mx-0">
      <h1 class="fw-bold fs-2">{formHeader}</h1>
      <p class="text-uppercase fw-normal fs-6 mt-3">{formText}</p>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
      <!-- Display messages based on form submission state -->
      {#if formState.success}
        <div class="row mx-0">
          <p class="success mt-3 text-[#F96B29]">
            Thank you {formState.fullName} for your submission. We will get back
            to you shortly.
          </p>
        </div>
      {/if}
      {#if formState.incorrect}
        <div class="row mx-0">
          <p class="error text-warning mt-3 text-danger">
            Please enter a valid email address.
          </p>
        </div>
      {/if}
      <div class="row mx-0 my-4">
        {#if fullName}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="fullname">{fullName}</label>
              <input
                type="text"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="fullname"
                name="fullname"
                bind:value={formState.fullName}
                required
              />
            </div>
          </div>
        {/if}
        {#if email}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="email">{email}</label>
              <input
                type="email"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="email"
                name="email"
                bind:value={formState.email}
                required
              />
            </div>
          </div>
        {/if}
      </div>
      <div class="row mx-0 my-4">
        {#if phoneNumber}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="phone-number">{phoneNumber}</label>
              <input
                type="number"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="phone-number"
                name="phoneNumber"
                bind:value={formState.phoneNumber}
                required
              />
            </div>
          </div>
        {/if}
        {#if date}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="date">{date}</label>
              <input
                type="date"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="date"
                name="date"
                bind:value={formState.date}
                required
              />
            </div>
          </div>
        {/if}
        {#if amount}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="amount">{amount}</label>
              <input
                type="number"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="amount"
                name="amount"
                bind:value={formState.amount}
                required
              />
            </div>
          </div>
        {/if}
        {#if message}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="message">{message}</label>
              <textarea
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="message"
                name="message"
                bind:value={formState.message}
                required
              ></textarea>
            </div>
          </div>
        {/if}
      </div>
      {#if preferredSize}
        <div class="row mx-0">
          <div>
            <p>Preferred Size</p>
            <div class="mt-3">
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="preferredSize"
                  id="size300"
                  value="300sqm"
                  on:change={() => (formState.preferredSize = "300sqm")}
                  checked={formState.preferredSize === "300sqm"}
                />
                <label class="form-check-label px-2" for="size300">
                  300sqm
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="preferredSize"
                  id="size500"
                  value="500sqm"
                  on:change={() => (formState.preferredSize = "500sqm")}
                  checked={formState.preferredSize === "500sqm"}
                />
                <label class="form-check-label px-2" for="size500">
                  500sqm
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="preferredSize"
                  id="size1000"
                  value="1000sqm"
                  on:change={() => (formState.preferredSize = "1000sqm")}
                  checked={formState.preferredSize === "1000sqm"}
                />
                <label class="form-check-label px-2" for="size1000">
                  1000sqm
                </label>
              </div>
            </div>
          </div>
        </div>
      {/if}
      <div class="row mx-0">
        <div class="my-4 mb-4">
          <button
            type="submit"
            class="btn bg-[#f96b29] py-3 px-20 hover:bg-[#0d493d] border-[#0d493d] hover:border-[#f96b29] text-[#f6fffd] hover:text-[#f6fffd]"
            >Submit</button
          >
        </div>
      </div>
    </form>
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
