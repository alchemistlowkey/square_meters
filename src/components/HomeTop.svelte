<script>
  import VideoModal from "../shared/VideoModal.svelte";

  let showModal = false;
  let videoUrl = "https://www.youtube.com/embed/mKAkIrad4vA"; // YouTube embed URL

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<div class="container-fluid homepage_banner pt-5">
  <div class="pt-4 body">
    <div class="row mx-0 pt-5">

      <div class="mt-4 col-12 pt-5 fs-1 fw-bold text-[#F6FFFD] px-0 text-center lg:text-nowrap">
        Wholesome Real Estate and Investment Solutions
      </div>
      <div class="col-12 col-lg-8 offset-lg-2 text-center fs-4 text-[#F6FFFD] text-wrap fw-light px-0">
        Square Metres helps you do real estate better than anyone else does,
        prioritizing quality and timely project delivery
      </div>
    </div>
  </div>
  <div class="pt-lg-5 pt-3 pb-lg-5 mb-lg-4 mb-3">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div class="w-100 p-3 fs-6 text-nowrap text-center text-lg-start text-white">
          Trusted by over 1000 individuals
        </div>
        <div class="w-100 pt-3">
          <div class="row mx-0 justify-content-lg-start justify-content-center">
            <div class="col-3">
              <img
                src="images/business_day.png"
                class="w-100"
                alt=""
              />
            </div>
            <div class="col-3">
                <img
                  src="images/bbc-group.png"
                  class="w-100 rounded"
                  alt=""
                />
            </div>
            <div class="col-3">
              <img
                src="images/punch_logo.png"
                class="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="trust-text text-center mb-3 mt-3 font-poppins text-white">
          <div class="row mx-0">
            <div class="col-11">
              <h1 class="fs-5 text-left">
                Watch Onion Nigeria CEO Mordi Orchi, discuss working with Square
                Metres
              </h1>
            </div>
            <div class="col-1 pl-0 pt-2 pt-md-4 cursor-pointer">
              <!-- svelte-ignore a11y-missing-attribute -->
              <!-- svelte-ignore a11y-no-static-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <a class="icon-link" on:click|preventDefault={openModal}>
              <i class="bi bi-play-circle-fill md:text-6xl text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<VideoModal isOpen={showModal} videoUrl={videoUrl} close={closeModal} />

<style>
</style>
