<script>
  import HomeText from "../shared/HomeText.svelte";
  import HomeCarousel from "../shared/HomeCarousel.svelte";
  import InfiniteCarousel from "../shared/InfiniteCarousel.svelte";
  import { onMount } from "svelte";
  import {
    RingLoader,
    Jumper,
    Moon,
    Circle,
    Circle2,
    Circle3,
    Chasing,
  } from "svelte-loading-spinners";

  let blogPosts = [];
  let loading = true;
  let error = null;
  const DESCRIPTION_LENGTH = 100; // Limit to 100 characters (adjust as needed)

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
  onMount(async () => {
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
  });
</script>

<section class="md:text-2xl lg:text-4xl text-base">
  <div class="bg-green py-5 py-md-2 mt-md-5 mt-3">
    <div class="py-5 w-[95%] mx-auto">
      <div class="">
        <div class="mx-0 row pb-md-3">
          <div class="text-center">
            <div class="seamingly text-white">News & Insight</div>
            <div
              class="seamingly-text text-white md:text-base lg:text-lg text-sm my-2"
            >
              A summary of industry news and updates in and around Square Metres
            </div>
          </div>
        </div>
      </div>
      <div class="mt-lg-5 mt-3 container">
        <div
          class="row mx-0 justify-content-center md:text-base lg:text-lg text-sm"
        >
          <div>
            {#if loading}
              <div class="container">
                <div class="row mx-0">
                  <div
                    class="col-6 col-sm-4 col-md-2 offset-3 offset-sm-4 offset-md-5"
                  >
                    <Circle2
                      size="200"
                      color="#f96b29"
                      unit="px"
                      duration="1s"
                    />
                  </div>
                </div>
              </div>
            {:else if error}
              <p class="text-red-500">Error: {error}</p>
            {:else if blogPosts.length === 0}
              <p class="text-center my-5">No blog posts available.</p>
            {:else}
              <div class="container">
                <div class="row mx-0">
                  {#each blogPosts.slice(0, 3) as post}
                    <!-- Changed to slice(0, 3) -->
                    <div class="col-md-4 col-12">
                      <div
                        class="card mb-4 border-[#0D493D] hover:border-[#f96b29]"
                      >
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
                            {truncateDescription(
                              post.description,
                              DESCRIPTION_LENGTH
                            )}
                            <a data-sveltekit-preload-code href={`/blog/${post.id}`} class="text-[#f96b29]"
                              >Read more</a
                            >
                          </div>
                          <p class="pt-5 font-normal">
                            <em>{formatDate(post.date)}</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
      <div>
        <div class="text-center">
          <a href="/blog" class="btn btn-md w-[320px] bg-[#f96b29] text-[#f9fffd] fw-medium rounded-3 hover:border-[#f96b29] border-[#F9FFFD] hover:bg-[#0d493d] hover:text-[#f96b29]"
            >View all Blog posts</a
          >
        </div>
      </div>
    </div>
  </div>
</section>

<section class="w-[90%] mx-auto">
  <HomeText
    TextHeader="You name it, we’ve figured it out"
    TextContent="Making your real estate investment decisions wise is our business."
  ></HomeText>
</section>

<section>
  <InfiniteCarousel
  Logos={[
    { word: "Get better returns for your money" },
      { word: "Diversified long-term investing" },
      { word: "Secure my financial future" },
      { word: "Grow my wealth steadily" },
      { word: "Invest in global markets" },
      { word: "Achieve my financial goals" },
      { word: "Build a strong investment portfolio" },
      { word: "Plan for retirement" },
      { word: "Invest for my kids" },
  ]}
  />

  <!-- <HomeCarousel
    Texts1={[
      { word: "Get better returns for your money" },
      { word: "Diversified long-term investing" },
      { word: "Invest for my kids" },
      { word: "Secure my financial future" },
    ]}
    Texts2={[
      { word: "Grow my wealth steadily" },
      { word: "Plan for retirement" },
      { word: "Invest in global markets" },
      { word: "Achieve my financial goals" },
    ]}
    Texts3={[
      { word: "Get better returns for your money" },
      { word: "Diversified long-term investing" },
      { word: "Invest for my kids" },
      { word: "Build a strong investment portfolio" },
    ]}
  ></HomeCarousel> -->
</section>

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
