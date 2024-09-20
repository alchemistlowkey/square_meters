<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";

  let message = "Verifying your email, please wait...";
  let status = "loading";

  onMount(async () => {
    const params = new URLSearchParams($page.url.search);
    const token = params.get("token");
    const email = params.get("email");

    if (!token || !email) {
      status = "error";
      message = "Missing verification token or email.";
      return;
    }

    try {
      const response = await fetch(
        `/verify-email?token=${token}&email=${email}`
      );

      if (response.ok) {
        const data = await response.json();
        status = "success";
        message = "Thank you for verifying your email.";
      } else {
        const errorData = await response.json();
        status = "error";
        message = errorData.message || "Invalid token or email.";
      }
    } catch (error) {
      status = "error";
      message = "An error occurred while verifying your email.";
    }
  });
</script>

<section class="pt-5">
  <div class="container my-5 w-[91.5%] mx-auto">
    <div class="row mx-0 mt-5 pt-5 bg">
      {#if status === "loading"}
      <div class="spinner"></div>
        <p class="loading">{message}</p>
      {:else if status === "success"}
        <h1 class="success">Email Verified Successfully!</h1>
        <p>{message}</p>
        <a href="/" class="text-[#F96B29] hover:text-[#0D493D] my-4">Click to go to the Homepage</a>
      {:else if status === "error"}
        <h1 class="error">Email Verification Failed</h1>
        <p>{message}</p>
      {/if}
    </div>
  </div>
</section>

<style>
  .bg{
    text-align: center;
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .success {
    color: #0D493D;
  }
  .error {
    color: red;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
  }
  .loading {
    font-size: 20px;
  }
  .spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #F96B29;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 0 auto 15px auto;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
} 
</style>
