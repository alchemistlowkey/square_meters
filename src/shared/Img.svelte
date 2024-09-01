<script>
  export let Images = [];
</script>

{#each Images as image}
  <div class="col-lg-3 col-md-4 col-6 my-5 px-lg-5 px-0 justify-content-center d-flex">
    <img src={image.src} alt="" class="w-50 md:w-full" />
  </div>
{/each}

<style>
</style>
