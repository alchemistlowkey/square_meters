<script>
    export let Images1 = [];
    export let Images2 = [];
    export let Images3 = [];
</script>

<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <!-- Page 1 -->
    <div class="carousel-item active">
      <div class="row mx-0 my-4">
        {#each Images1 as image1}
        <div class="col-md-4 my-2">
          <div class="card">
            <img src={image1.src} class="card-img-top rounded h-[25rem] w-full" alt="" />
          </div>
        </div>
        {/each}
      </div>
    </div>

    <!-- Page 2 -->
    <div class="carousel-item">
      <div class="row mx-0 my-4">
        {#each Images2 as image2}
        <div class="col-md-4 my-2">
          <div class="card">
            <img src={image2.src} class="card-img-top rounded h-[25rem] w-full" alt="" />
          </div>
        </div>
        {/each}
      </div>
    </div>

    <!-- Page 3 -->
    <div class="carousel-item">
      <div class="row mx-0 my-4">
        {#each Images3 as image3}
        <div class="col-md-4 my-2">
          <div class="card">
            <img src={image3.src} class="card-img-top rounded h-[25rem] w-full" alt="" />
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Carousel controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<style>
</style>
