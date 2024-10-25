<script>
  import VideoModal from "../shared/VideoModal.svelte";
  import Bg from "../shared/Bg.svelte";
  import HomeHead from "../shared/HomeHead.svelte";

  let showModal = false;
  let videoUrl = "https://www.youtube.com/embed/mKAkIrad4vA"; // YouTube embed URL

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }
</script>

<Bg headerBG="hpb.jpeg">
  <HomeHead
    CardContent="Wholesome Real Estate and Investment Solutions"
    CardContent3="Square Metres helps you do real estate better than anyone else"
    CardContent4="prioritizing quality and timely project delivery"
  ></HomeHead>
  <div class="pt-lg-5 pt-3 pb-lg-5 mb-lg-4 mb-3 w-[90%] mx-auto">
    <div class="row mx-0">
      <div class="col-lg-6">
        <div
          class="w-100 p-3 fs-6 text-nowrap text-center text-lg-start text-[#F6FFFD]"
        >
          <h2>Trusted by over 1000 individuals</h2>
        </div>
        <div class="w-100 pt-3">
          <div class="row mx-0 justify-content-lg-start justify-content-center">
            <div class="col-3">
              <img
                src="images/business_day.png"
                class="w-100"
                alt="Business day Logo"
                loading="lazy"
              />
            </div>
            <div class="col-3">
              <img
                src="images/bbc-group.png"
                class="w-100 rounded"
                alt="BBC logo"
                loading="lazy"
              />
            </div>
            <div class="col-3">
              <img
                src="images/punch_logo.png"
                class="w-100"
                alt="Punch Logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div
          class="trust-text text-center mb-3 mt-3 font-poppins text-[#F6FFFD]"
        >
          <div class="row mx-0">
            <div class="col-11">
              <h3
                class="xl:text-2xl lg:text-xl md:text-xl sm:text-lg text-base text-left"
              >
                Watch Onion Nigeria CEO Mordi Orchi, discuss working with Square
                Metres
              </h3>
            </div>
            <div class="col-1 pl-0 pt-2 pt-md-4 cursor-pointer">
              <a
                class="icon-link"
                href="/"
                on:click|preventDefault={openModal}
              >
                <i class="bi bi-play-circle-fill md:text-6xl text-5xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Bg>

<VideoModal isOpen={showModal} {videoUrl} close={closeModal} />

<style>
</style>
