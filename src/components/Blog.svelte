<script>
  import FormBlog from "../shared/FormBlog.svelte";
  import Offer from "../shared/Offer.svelte"
  import BlogPost from "../shared/BlogPost.svelte";
</script>

<section class="w-[90%] mx-auto">
  <div class="container">
    <div class="row mx-0">
      <div class="col-8 offset-2 mt-[100px]">
        <h1 class="text-[#0D493D] text-center text-lg md:text-xl lg:text-3xl my-3">Square Meters Blog</h1>
        <h3 class="text-center text-[#0D493D] text-sm md:text-base lg:text-lg text-wrap my-3">Get the latest news about the real estate industry and how to invest in real estate business.</h3>
        <!-- <FormBlog /> -->
      </div>
    </div>
  </div>
</section>

<section class="w-[90%] mx-auto">
  <BlogPost />
</section>

<Offer />

<style></style>