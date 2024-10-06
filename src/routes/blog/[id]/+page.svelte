<script>
  export let data; // Access the data object from the load function
</script>

<section class="my-[100px] fixed ms-5">
  <div class="container m-auto pb-[100px] px-6 font-semibold">
    <a
      href="/blog"
      class="hover:text-[#F96B29] flex items-center"
    >
    <i class="bi bi-arrow-left mr-2"></i> Back to Blog
    </a>
  </div>
</section>

{#if data.post}
  <section class="pt-[200px]">
    <div class="container">
      <div class="row mx-0">
        <div class="col-md-6">
          <img
            src={data.post.image_url}
            alt={data.post.title}
            class="w-full h-auto rounded-4"
            loading="lazy"
          />
        </div>
        <div class="col-md-6 p-5">
          <h1 class="text-[#0D493D] font-bold text-3xl py-4">
            {data.post.title}
          </h1>
          <pre class="py-4 text-balance">{data.post.description}</pre>
          <p class="py-5">
            <em class="font-light"
              >{new Date(data.post.date).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}</em
            >
          </p>
        </div>
      </div>
    </div>
  </section>
{:else}
  <p>Post not found.</p>
{/if}

<style>
  pre {
    font-family: "Poppins";
  }
</style>