<script>
  export let Texts1 = [];
  export let Texts2 = [];
  export let Texts3 = [];
</script>

<section class="my-5 py-5 lg:text-lg md:text-base text-sm">
  <div id="customCarousel" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row mx-0">
            {#each Texts1 as Text1}
              <div class="col-md-3 mb-3">
                <div class="cite-map hover:text-[#f9fffd] hover:bg-[#F96B29]">
                  “<br />{Text1.word}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row mx-0">
            {#each Texts2 as Text2}
              <div class="col-md-3 mb-3">
                <div class="cite-map">
                  “<br />{Text2.word}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="container">
          <div class="row mx-0">
            {#each Texts3 as Text3}
              <div class="col-md-3 mb-3">
                <div class="cite-map">
                  “<br />{Text3.word}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Continuous sliding effect */
  .carousel-inner {
    display: flex;
    animation: scroll 15s linear 1ms infinite alternate;
    animation-play-state: running; /* Default state: running */
  }

  /* Define the animation for continuous movement */
  @keyframes scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  /* Pause animation on hover */
  .carousel-inner:hover {
    animation-play-state: paused; /* Stop animation on hover */
  }

  /* Ensure carousel items take up full width to enable scrolling */
  .carousel-item {
    flex: 0 0 100%;
    max-width: 100%;
  }
</style>
