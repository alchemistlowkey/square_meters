<script>
  export let Images = [];
  export let HomeImages = [];
  export let ProductImages = [];
  export let AboutImages = [];
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
                class="bg text-[#F6FFFD] hover:text-[#F96B29] btn border-[#0d493d] hover:border-[#F96B29] my-1 fw-semibold rounded-xl pb-10 md:text-2xl lg:text-3xl text-base"
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

{#if AboutImages}
  {#each AboutImages as aboutimage}
    <div class="col-lg-3 col-6">
      <div class="news_card text-lg-center text-center">
        <img
          src={aboutimage.src}
          class="rounded"
          alt={aboutimage.alt}
          loading="lazy"
        />
        <div class="head">{aboutimage.head}</div>
        <div class="body">{aboutimage.body}</div>
      </div>
    </div>
  {/each}
{/if}

{#if ProductImages}
  <div class="container mt-4">
    <div class="mt-4">
      <div class="w-100">
        <div class="mx-0 row">
          {#each ProductImages as ProductImage}
            <div class="col-md-6">
              <a href={ProductImage.href}>
                <div
                  class="bg text-[#F6FFFD] my-1 hover:text-[#0d493d] fw-semibold rounded-xl pb-10 md:text-2xl lg:text-3xl text-base"
                  style="background-image: url('/images/{ProductImage.src}')"
                >
                  <span
                    class="text-sm md:text-base lg:text-lg pr-3 hover:text-[#0d493d] text-[#F96B29]"
                    >{ProductImage.span}</span
                  >{ProductImage.text}
                </div>
              </a>
            </div>
          {/each}
        </div>
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
