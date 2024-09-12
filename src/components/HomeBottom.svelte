<script>
  import HomeText from "../shared/HomeText.svelte";
  import HomeCarousel from "../shared/HomeCarousel.svelte";
</script>

<section class="md:text-2xl lg:text-4xl text-base">
  <div class="bg-green py-5 py-md-2 mt-md-5 mt-3">
    <div class="py-5">
      <div class="">
        <div class="mx-0 row pb-md-3">
          <div class="col-md-5">
            <span class="seamingly text-white"> News & Insight </span>
          </div>
          <div class="col-md-7">
            <span
              class="seamingly-text text-white md:text-base lg:text-lg text-sm"
              >A summary of industry news and updates in and around Square
              Metres
            </span>
          </div>
        </div>
      </div>
      <div class="mt-lg-5 mt-3">
        <div
          class="row mx-0 justify-content-center md:text-base lg:text-lg text-sm"
        >
          <div class="col-md-4">
            <a href="/" class="text-decoration-none">
              <div class="news_card">
                <img src="images/new1.jpeg" class="rounded" alt="" />
                <div class="head">Team Values</div>
                <div class="body">
                  Poised to be one of the most organised setllement in its host
                  community, Epe, which is also the fastest-selling and most
                  sought....
                </div>
                <div class="date d-flex">
                  <div class="col-5 pt-2 text-white">APR 21 2023</div>
                  <div class="col arrow-up text-white">
                    <img src="images/up-arrow.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="/" class="text-decoration-none">
              <div class="news_card">
                <img src="images/news2.jpeg" class="rounded" alt="" />
                <div class="head">Team Values</div>
                <div class="body">
                  Poised to be one of the most organised setllement in its host
                  community, Epe, which is also the fastest-selling and most
                  sought....
                </div>
                <div class="date d-flex">
                  <div class="col-5 pt-2 text-white">APR 21 2023</div>
                  <div class="col arrow-up text-white">
                    <img src="images/up-arrow.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-4">
            <a href="/" class="text-decoration-none">
              <div class="news_card">
                <img src="images/news3.jpeg" class="rounded" alt="" />
                <div class="head">Team Values</div>
                <div class="body">
                  Poised to be one of the most organised setllement in its host
                  community, Epe, which is also the fastest-selling and most
                  sought....
                </div>
                <div class="date d-flex">
                  <div class="col-5 pt-2 text-white">APR 21 2023</div>
                  <div class="col arrow-up text-white">
                    <img src="images/up-arrow.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="col-md-6 mt-5">
            <a
              href="/"
              class="text-decoration-none text-white w-100 news-read-more btn hover:bg-orange-700"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <HomeText
    TextHeader="You name it, we’ve figured it out"
    TextContent="Making your real estate investment decisions wise is our business."
  ></HomeText>

  <HomeCarousel
    Texts1={[
      { word: "Get better returns for your money" },
      { word: "Diversified long-term investing" },
      { word: "Invest for my kids" },
      { word: "Secure my financial future" },
    ]}
    Texts2={[
      { word: "Grow my wealth steadily" },
      { word: "Plan for retirement" },
      { word: "Invest in global markets" },
      { word: "Achieve my financial goals" },
    ]}
    Texts3={[
      { word: "Get better returns for your money" },
      { word: "Diversified long-term investing" },
      { word: "Invest for my kids" },
      { word: "Build a strong investment portfolio" },
    ]}
    
  ></HomeCarousel>
</section>

<style>
</style>
