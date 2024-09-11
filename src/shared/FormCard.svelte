<script>
  export let firstName = "";
  export let lastName = "";
  export let email = "";
  export let phoneNumber = "";

  let formState = {
    success: false,
    missing: false,
    incorrect: false,
    exists: false,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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

    // before reset
    const newFirstname = formData.get("firstname");
    const newLastname = formData.get("lastname");

    try {
      const response = await fetch("/db/formCard", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        formState.success = true;
        formState.firstName = newFirstname;
        formState.lastName = newLastname;
        // Reset form state
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
    formState.email = "";
    formState.phoneNumber = "";
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="row mx-0 fw-semibold text-base md:text-lg">
    <div class="col-12">
      <label for="firstname">{firstName}</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        bind:value={formState.firstName}
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      />
    </div>
    <div class="col-12">
      <label for="lastname">{lastName}</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        bind:value={formState.lastName}
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      />
    </div>
    <div class="col-12">
      <label for="email">{email}</label>
      <input
        type="email"
        name="email"
        id="email"
        bind:value={formState.email}
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      />
    </div>
    <div class="col-12">
      <label for="phoneNumber">{phoneNumber}</label>
      <input
        type="number"
        name="phoneNumber"
        id="phoneNumber"
        bind:value={formState.phoneNumber}
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      />
    </div>
    <div class="col-12">
      <label for=""></label>
      <button
        type="submit"
        class="w-full bg-[#F96B29] hover:bg-[#0d493d] text-[#FFFFFF] rounded p-2 my-2"
      >
        Submit
      </button>
    </div>
  </div>
  {#if formState.success}
    <div class="text-[#0D493D] fw-semibold text-center mt-2">
      <p>Thank you, {formState.firstName} {formState.lastName}!</p>
    </div>
  {/if}
  {#if formState.missing}
    <div class="text-[#0D493D] fw-semibold text-center mt-2">
      <p>Please fill in all fields</p>
    </div>
  {/if}
  {#if formState.incorrect}
    <div class="text-[#0D493D] fw-semibold text-center mt-2">
      <p>Please enter a valid email address</p>
    </div>
  {/if}
  {#if formState.exists}
    <div class="text-[#0D493D] fw-semibold text-center mt-2">
      <p>Dear {formState.firstName} {formState.lastName}, We already have you as an agent</p>
    </div>
  {/if}
</form>

<style></style>
