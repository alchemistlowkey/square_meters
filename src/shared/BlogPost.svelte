<!-- src/shared/BlogPosts.svelte -->
<script>
  import { onMount } from "svelte";

  let blogPosts = [];
  let loading = true;
  let error = null;
  const DESCRIPTION_LENGTH = 80; // Limit to 100 characters (adjust as needed)

  // Function to fetch blog posts
  async function fetchBlogPosts() {
    try {
      const response = await fetch("/api/getBlogPosts");
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      const data = await response.json();
      blogPosts = data.posts.reverse(); // Adjust based on the structure of your response
    } catch (err) {
      error = err.message;
    } finally {
      loading = false;
    }
  }

  // Format date function
  function formatDate(dateString) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  // Truncate the description and add a "Read More" link
  function truncateDescription(description, length) {
    if (description.length > length) {
      return description.slice(0, length) + "...";
    }
    return description;
  }

  // Fetch blog posts on component mount
  onMount(fetchBlogPosts);
</script>

<div>
  {#if loading}
    <p class="text-center pt-5">
      <span
        class="spinner-border spinner-border-sm text-[#f96b29]"
        role="status"
        aria-hidden="true"
      ></span> Loading blog posts...
    </p>
  {:else if error}
    <p class="text-red-500">Error: {error}</p>
  {:else if blogPosts.length === 0}
    <p class="text-center my-5">No blog posts available.</p>
  {:else}
    <div class="container">
      <!-- Display the latest blog post in a full-width column -->
      <div class="row mb-4 mx-0 my-5">
        <div class="col-12">
          <div class="card p-0 m-0 border-[#0D493D] hover:border-[#f96b29]">
            <div class="row mx-0">
              <div class="col-md-6">
                <a href={`/blog/${blogPosts[0].id}`}>
                  <div class="card-body p-md-2 p-lg-5">
                    <h1 class="font-medium">Latest Article</h1>
                    <h2 class="text-[#0D493D] font-bold text-3xl py-4">
                      {blogPosts[0].title}
                    </h2>
                    <div
                      class="py-2 text-balance"
                      style="white-space: pre-wrap;"
                    >
                      {blogPosts[0].description}
                    </div>
                    <p class="pt-5 font-light">
                      <em>{formatDate(blogPosts[0].date)}</em>
                    </p>
                  </div>
                </a>
              </div>
              <div class="col-md-6">
                <img
                  src={blogPosts[0].image_url}
                  alt={blogPosts[0].title}
                  class="card-img-right w-100 h-auto rounded-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Display remaining blog posts -->
      <div class="row">
        {#each blogPosts.slice(1) as post}
          <div class="col-md-4">
            <div class="card mb-4 border-[#0D493D] hover:border-[#f96b29]">
              <img
                src={post.image_url}
                alt={post.title}
                class="card-img-top w-100 h-[300px] rounded-2"
                loading="lazy"
              />
              <div class="card-body">
                <h2
                  class="text-[#0D493D] font-bold text-xl py-2 title-ellipsis"
                >
                  {post.title}
                </h2>
                <div class="">
                  {truncateDescription(post.description, DESCRIPTION_LENGTH)}
                  <a href={`/blog/${post.id}`} class="text-[#f96b29]"
                    >Read more</a
                  >
                </div>
                <p class="pt-5 font-light"><em>{formatDate(post.date)}</em></p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .card {
    transition: transform 0.2s; /* Add a smooth transition effect */
  }

  .card:hover {
    transform: scale(1.02); /* Scale up on hover */
  }

  .card-img-top {
    object-fit: cover; /* Ensures images fill the space without distortion */
  }

  .title-ellipsis {
    white-space: nowrap; /* Prevent line breaks */
    overflow: hidden; /* Hide overflowed content */
    text-overflow: ellipsis; /* Add ellipsis for overflowed content */
    max-width: 100%; /* Ensures the title uses the full width */
  }
</style>
