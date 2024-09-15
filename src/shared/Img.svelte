<script>
  export let Images = [];
  export let HomeImages = [];
</script>

{#if Images}
  {#each Images as image}
    <div
      class="col-lg-3 col-md-4 col-6 my-5 px-lg-5 px-0 justify-content-center d-flex"
    >
      <img src={image.src} alt={image.alt} class="w-50 md:w-full" />
    </div>
  {/each}
{/if}

{#if HomeImages}
  <div class="mt-4">
    <div class="w-100">
      <div class="mx-0 row">
        {#each HomeImages as HomeImage}
          <div class="col-md-4">
            <a href={HomeImage.href}>
              <div
              class="bg text-[#F6FFFD] hover:text-[#F96B29] my-1 fw-semibold rounded-xl pb-10 md:text-2xl lg:text-3xl text-base"
              style="background-image: url('/images/{HomeImage.src}')"
              >
              {HomeImage.text}
            </div>
          </a>
          </div>
        {/each}
      </div>
    </div>
  </div>
{/if}

<style>
  .bg {
    background-size: cover;
    background-position: center;
    display: flex;
    min-height: 50vh;
    flex-wrap: wrap;
    align-content: flex-end;
    justify-content: center;
  }
</style>
