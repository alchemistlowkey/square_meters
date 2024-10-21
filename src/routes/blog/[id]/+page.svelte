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
            class="w-full h-auto rounded"
            loading="lazy"
          />
        </div>
        <div class="col-md-6 p-5 pt-0">
          <h1 class="text-[#0D493D] font-bold text-3xl">
            {data.post.title}
          </h1>
          <div class="formatted-content py-5 text-balance">
            {@html data.post.description}
          </div>
          
          <p class="py-4 font-medium">Author: <span class="italic font-semibold">{data.post.author}</span></p>
          <p class="py-4">
            <em class="font-normal"
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
  .formatted-content {
    white-space: pre-wrap; /* Preserves new lines and spaces */
  }
</style>