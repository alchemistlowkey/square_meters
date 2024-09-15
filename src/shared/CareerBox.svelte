<script>
  export let CareerDetails = [];
</script>

{#if CareerDetails}
  <div class="container-fluid">
    <div class="row mx-0 pt-md-1 p-text text-cgreen text-center">
      {#each CareerDetails as careerdetail}
        <div class="col-md-4 py-md-0 py-5 text-center">
          <img
            src="/images/{careerdetail.src}"
            alt={careerdetail.alt}
            class="mx-auto d-block"
          />
          <p class="py-4 fw-bold">{careerdetail.head}</p>
          <p class="text-sm md:text-base lg:text-lg">{careerdetail.body}</p>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
</style>
