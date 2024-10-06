<script>
  export let HomeBoxes = [];
  export let BoxContent = [];

  // Function to update hover state
  const handleMouseEnter = (index) => {
    HomeBoxes = HomeBoxes.map((homebox, i) =>
      i === index ? { ...homebox, isHovered: true } : homebox
    );
  };

  const handleMouseLeave = (index) => {
    HomeBoxes = HomeBoxes.map((homebox, i) =>
      i === index ? { ...homebox, isHovered: false } : homebox
    );
  };
</script>

{#if BoxContent}
<div class="container my-lg-2">
  <div class="col-md-10 offset-md-1">
    <div class="mx-0 row">
      {#each BoxContent as boxcontent}
        <div class="col-md-6 mb-3 cursor-pointer">
          <div
            class="about_define_box hover:text-[#f6fffd] hover:bg-[#f96b29] hover:border-[#0d493d] h-[25rem] md:h-[34rem] lg:h-[26rem]"
          >
            <div class="image">
              <img
                src={boxcontent.src}
                class="mx-auto d-block"
                alt={boxcontent.alt}
                loading="lazy"
              />
            </div>
            <div class="title my-3">{boxcontent.title}</div>
            <div class="body text-sm md:text-base lg:text-lg">
              {boxcontent.body}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
{/if}

{#if HomeBoxes}
  <div class="mt-5">
    <div class="row mx-0 md:text-base lg:text-lg text-sm">
      {#each HomeBoxes as homebox, index}
        <div
          class="col-md-4 mb-lg-0 mb-3"
          on:mouseenter={() => handleMouseEnter(index)}
          on:mouseleave={() => handleMouseLeave(index)}
          role="button"
          tabindex="0"
        >
          <div
            class="shadow-[0_30px_60px_0px_rgba(107,107,107,0.25)] home-box rounded-lg xl:p-10 lg:p-8 md:p-5 p-11 h-full"
          >
            {#if homebox.isHovered}
              <img
                src="images/{homebox.hover}"
                class="max-w-[60px]"
                alt={homebox.alt}
                loading="lazy"
              />
            {:else}
              <img
                src="images/{homebox.src}"
                class="max-w-[60px]"
                alt={homebox.alt}
                loading="lazy"
              />
            {/if}

            <div class="fw-semibold home-head">
              {homebox.head}
            </div>

            <div class="home-body">
              {homebox.body}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  .home-box {
    background: #fbfffe;
    border: 2px solid #cccccc;
  }
  .home-box .home-head {
    color: #656565;
  }
  .home-box .home-body {
    color: #0d493d;
  }
  @media (hover: hover) {
    .home-box:hover {
      background: #f96b29;
      border: 2px solid #0d493d;
    }
    .home-box:hover .home-head {
      color: white;
    }
    .home-box:hover .home-body {
      color: white;
    }
  }
</style>
