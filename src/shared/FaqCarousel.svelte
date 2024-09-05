<script>
  export let Images1 = [];
  export let Images2 = [];
  export let Images3 = [];
</script>

<section class="my-5 py-5">
  <div id="customCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <!-- Page 1 -->
      <div class="carousel-item active">
        <div class="container">
          <div class="row mx-0">
            <!-- First div -->
            {#each Images1 as image1}
              <div class="col-md-4 my-3">
                <div
                  class="row mx-0 bg-[#F6FFFD] border-orange hover:bg-[#0D493D] rounded py-5 px-4 hover:text-[#FFFFFF] hover:border-none"
                >
                  <div class="col-12">
                    {image1.text}
                  </div>
                  <div class="col-12">
                    <div class="row mx-0">
                      <div class="col-6 fs-6">
                        <img
                          src="/images/{image1.src}"
                          alt=""
                          style="width: 65px; height: 65px"
                          class="rounded-5 fs-6 my-3 float-end"
                        />
                      </div>
                      <div class="col-6 py-4">
                        <div class="fw-semibold">{image1.name}</div>
                        <div class="fw-medium">{image1.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <!-- Page 2 -->
      <div class="carousel-item">
        <div class="container">
          <div class="row mx-0">
            <!-- First div -->
            {#each Images2 as image2}
              <div class="col-md-4 my-3">
                <div
                  class="row mx-0 bg-[#F6FFFD] border-orange hover:bg-[#0D493D] rounded py-5 px-4 hover:text-[#FFFFFF] hover:border-none"
                >
                  <div class="col-12">
                    {image2.text}
                  </div>
                  <div class="col-12">
                    <div class="row mx-0">
                      <div class="col-6 fs-6">
                        <img
                          src="/images/{image2.src}"
                          alt=""
                          style="width: 65px; height: 65px"
                          class="rounded-5 fs-6 my-3 float-end"
                        />
                      </div>
                      <div class="col-6 py-4">
                        <div class="fw-semibold">{image2.name}</div>
                        <div class="fw-medium">{image2.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <!-- Page 3 -->
      <div class="carousel-item">
        <div class="container">
          <div class="row mx-0">
            <!-- First div -->
            {#each Images3 as image3}
              <div class="col-md-4 my-3">
                <div
                  class="row mx-0 bg-[#F6FFFD] border-orange hover:bg-[#0D493D] rounded py-5 px-4 hover:text-[#FFFFFF] hover:border-none"
                >
                  <div class="col-12">
                    {image3.text}
                  </div>
                  <div class="col-12">
                    <div class="row mx-0">
                      <div class="col-6 fs-6">
                        <img
                          src="/images/{image3.src}"
                          alt=""
                          style="width: 65px; height: 65px"
                          class="rounded-5 fs-6 my-3 float-end"
                        />
                      </div>
                      <div class="col-6 py-4">
                        <div class="fw-semibold">{image3.name}</div>
                        <div class="fw-medium">{image3.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
     <!-- Custom Controls -->
     <button class="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <!-- Custom SVG for Previous -->
        <span aria-hidden="true">
          <img src="images/prev.svg" alt="Previous" />
        </span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <!-- Custom SVG for Next -->
        <span aria-hidden="true">
          <img src="images/next.svg" alt="Next" />
        </span>
        <span class="visually-hidden">Next</span>
      </button>
  </div>
</section>

<style>
  .border-orange {
  border: 2px solid #f96b29;
  position: relative;
}

.border-orange::before {
  content: '';
  position: absolute;
  top: -20px; /* Adjust as necessary to position the SVG correctly */
  left: 40px; /* Adjust as necessary to position the SVG correctly */
  width: 40px; /* Adjust the size of the SVG */
  height: 40px; /* Adjust the size of the SVG */
  background-image: url('images/quote.svg'); /* Path to the SVG */
  background-size: contain;
  background-repeat: no-repeat;
}

</style>
