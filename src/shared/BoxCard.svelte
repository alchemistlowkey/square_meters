<script>
  export let HomeBoxes = [];

  // Function to update hover state
  const handleMouseEnter = (index) => {
    HomeBoxes = HomeBoxes.map((homebox, i) =>
      i === index ? { ...homebox, isHovered: true } : homebox
    );
  }

  const handleMouseLeave = (index) => {
    HomeBoxes = HomeBoxes.map((homebox, i) =>
      i === index ? { ...homebox, isHovered: false } : homebox
    );
  }
</script>

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
              <img src="images/{homebox.hover}" class="max-w-[60px]" alt="" />
            {:else}
              <img src="images/{homebox.src}" class="max-w-[60px]" alt="" />
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
