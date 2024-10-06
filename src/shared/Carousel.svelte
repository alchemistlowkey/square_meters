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
            <div class="card border-whit">
              <img
                src={image1.src}
                class="card-img-top rounded h-[25rem] w-full"
                alt={image1.alt}
                loading="lazy"
              />
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
            <div class="card border-whit">
              <img
                src={image2.src}
                class="card-img-top rounded h-[25rem] w-full"
                alt={image2.alt}
                loading="lazy"
              />
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
            <div class="card border-whit">
              <img
                src={image3.src}
                class="card-img-top rounded h-[25rem] w-full"
                alt={image3.alt}
                loading="lazy"
              />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Custom Controls -->
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    <span aria-hidden="true" class="prev-icon">
      <img src="images/prev.png" alt="Previous" loading="lazy" />
    </span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    <span aria-hidden="true" class="next-icon">
      <img src="images/next.png" alt="Next" loading="lazy" />
    </span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<style>
  .border-whit {
    border: 2px solid #f9ffff;
    position: relative;
  }

  .border-whit:hover {
    border: 2px solid #f96b29;
    position: relative;
    cursor: pointer;
  }

  .border-whit::before {
    content: "";
    position: absolute;
    top: -20px;
    left: 40px;
    width: 40px;
    height: 40px;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80" fill="none"><rect width="80" height="80" rx="40" fill="%23F96B29"/><path d="M30.63 26.8018C27.41 26.8018 24.798 29.4878 24.798 32.8018C24.798 36.1138 27.41 38.8018 30.63 38.8018C36.46 38.8018 32.574 50.3998 24.798 50.3998V53.1998C38.676 53.2018 44.114 26.8018 30.63 26.8018ZM47.43 26.8018C44.212 26.8018 41.6 29.4878 41.6 32.8018C41.6 36.1138 44.212 38.8018 47.43 38.8018C53.262 38.8018 49.376 50.3998 41.6 50.3998V53.1998C55.476 53.2018 60.914 26.8018 47.43 26.8018Z" fill="%23F6FFFD"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
  }

  .carousel-control-prev .prev-icon img,
  .carousel-control-next .next-icon img {
    transition: all 0.3s ease;
  }

  .carousel-control-prev:hover .prev-icon img {
    content: url("../lib/img/prev-hover.png");
  }

  .carousel-control-next:hover .next-icon img {
    content: url("../lib/img/next-hover.png");
  }
</style>
