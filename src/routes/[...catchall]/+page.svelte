<script>
  export let status = 404;
  export let error = new Error("Page not found");
</script>

<section class="text-center mt-5 pt-5">
  <div class="container pt-5 my-5">
    <div class="row mx-0 fw-medium">
      <h1 class="text-8xl mx-0 text-[#F96B29]">{status}</h1>
      <p class="text-[#0D493D] text-4xl my-2">{error.message}</p>
      <a href="/" class="text-[#F96B29] hover:text-[#0D493D] my-4"
        >Click to go to the Homepage</a
      >
    </div>
  </div>
</section>

<style>
</style>
