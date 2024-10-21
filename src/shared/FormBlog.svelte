<script>
  import { onMount } from "svelte";
  import { warning, failure, toastsuccess } from "../lib/js/toast-theme";

  let formState = {
    blogTitle: "",
    blogDescription: "",
    blogDate: "", // This will be auto-generated
    blogAuthor: "", // New field for the author's name
    blogImage: null,
    success: false,
    missingFields: false,
    incorrectFileType: false,
    submissionError: false,
    loading: false,
  };

  function handleFileChange(event) {
    const file = event.target.files[0];
    const validFileTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif"];

    if (file && validFileTypes.includes(file.type)) {
      formState.blogImage = file;
      formState.incorrectFileType = false;
    } else {
      formState.incorrectFileType = true;
      formState.blogImage = null;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const blogTitle = formData.get("blogTitle");
    const blogDescription = formData.get("blogDescription");
    const blogAuthor = formData.get("blogAuthor");
    const blogImage = formState.blogImage;

    // Reset error states
    formState.success = false;
    formState.missingFields = false;
    formState.incorrectFileType = false;
    formState.submissionError = false;

    if (!blogTitle || !blogDescription || !blogAuthor || !blogImage) {
      formState.missingFields = true;
      warning("Please fill in all fields."); // Custom warning toast
      return;
    }

    formState.loading = true;

    try {
      // Simulate blog post submission
      const response = await fetch("/db/formBlog", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        formState.success = true;
        toastsuccess("Blog post successfully created!"); // Custom success toast
        event.target.reset(); // Reset form on success
        formState.blogImage = null; // Clear image preview
      } else {
        formState.submissionError = true;
        failure("An error occurred during submission. Please try again later."); // Custom warning toast
      }
    } catch (error) {
      formState.submissionError = true;
      failure("An error occurred during submission. Please try again later."); // Custom failure toast
      console.error("Form submission error:", error);
    } finally {
      formState.loading = false;
    }
  }

  // Set blogDate automatically when the component mounts
  onMount(() => {
    const today = new Date();
    formState.blogDate = today.toISOString().split("T")[0]; // Format as YYYY-MM-DD
  });

</script>

<form on:submit={handleSubmit}>
  <div class="row mx-0 fw-semibold text-base md:text-lg">
    <div class="col-12">
      <label for="blogTitle">Blog Title</label>
      <input
        type="text"
        name="blogTitle"
        id="blogTitle"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      />
    </div>

    <div class="col-12">
      <label for="blogDescription">Blog Description</label>
      <textarea
        name="blogDescription"
        id="blogDescription"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        required
      ></textarea>
    </div>

    <!-- New field for Author -->
    <div class="col-12">
      <label for="blogAuthor">Author</label>
      <input
        type="text"
        name="blogAuthor"
        id="blogAuthor"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
      />
    </div>

    <!-- Blog date is automatically set and not editable -->
    <input type="hidden" name="blogDate" value={formState.blogDate} />

    <div class="col-12">
      <label for="blogImage">Upload Image</label>
      <input
        type="file"
        name="blogImage"
        id="blogImage"
        accept="image/*"
        class="w-full border-1 bg-[#F6FFFD] border-[#0D493D] rounded p-2 my-2"
        on:change={handleFileChange}
        required
      />
    </div>

    <div class="col-12">
      <button
        type="submit"
        class="btn w-full bg-[#F96B29] hover:bg-[#0d493d] text-[#F6FFFD] hover:text-[#F96B29] rounded p-2 my-2 flex items-center justify-center"
        disabled={formState.loading}
      >
        {#if formState.loading}
          <p>
            <span
              class="spinner-border spinner-border-sm text-[#f96b29]"
              role="status"
              aria-hidden="true"
            ></span> 
            Submitting...
          </p>
        {:else}
          Submit
        {/if}
      </button>
    </div>
  </div>

  {#if formState.success}
    <div class="text-[#0D493D] fw-semibold text-center my-5">
      <p>Blog post successfully created!</p>
    </div>
  {/if}

  {#if formState.missingFields}
    <div class="text-[#D9534F] fw-semibold text-center mt-2">
      <p>Please fill in all fields.</p>
    </div>
  {/if}

  {#if formState.incorrectFileType}
    <div class="text-[#D9534F] fw-semibold text-center mt-2">
      <p>Please upload a valid image file (JPEG, PNG, GIF).</p>
    </div>
  {/if}

  {#if formState.submissionError}
    <div class="text-[#D9534F] fw-semibold text-center mt-2">
      <p>An error occurred during submission. Please try again later.</p>
    </div>
  {/if}
</form>

<style>
  /* Add your styles here */
</style>
