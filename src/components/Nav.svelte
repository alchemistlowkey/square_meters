<script>
  let showProductsDropdown = false;
  let showCompanyDropdown = false;
  let showMobileNav = false;

  const toggleProductsDropdown = () => {
      showProductsDropdown = !showProductsDropdown;
  };

  const toggleCompanyDropdown = () => {
      showCompanyDropdown = !showCompanyDropdown;
  };

  const toggleMobileNav = () => {
      showMobileNav = !showMobileNav;
  };

  const closeMobileNav = () => {
      showMobileNav = false;
  };
</script>

<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
  <div class="container desktop_nav">
      <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown drop11">
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <!-- svelte-ignore a11y-no-static-element-interactions -->
                  <!-- svelte-ignore a11y-click-events-have-key-events -->
                  <a class="nav-link" aria-current="page" on:click={toggleProductsDropdown}>
                      <span>
                          Products <i class="fa fa-angle-down"></i>
                      </span>
                  </a>
                  {#if showProductsDropdown}
                      <ul class="submenu subdrop11">
                          <li class="nav-item">
                              <div class="row mx-0">
                                  <div class="col-xl-12">
                                      <a class="nav-link drop-p" href="/">
                                          <div class="mx-0 row">
                                              <div class="col-2">
                                                  <img class="building" src="images/land.png" alt="" />
                                              </div>
                                              <div class="offset-1 col-9">
                                                  <span class="normal-text">Land</span>
                                                  <br>
                                                  <span class="small-text">Fitila Signatures</span>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <div class="col-xl-12">
                                      <a class="nav-link drop-p" href="/">
                                          <div class="mx-0 row">
                                              <div class="col-2">
                                                  <img class="building" src="images/investment.png" alt="" />
                                              </div>
                                              <div class="offset-1 col-9">
                                                  <span class="normal-text">Investment</span>
                                                  <br>
                                                  <span class="small-text">Up to 25% ROI</span>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  {/if}
              </li>

              <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <li class="nav-item dropdown drop1" on:click={toggleCompanyDropdown}>
                  <a href="/" class="nav-link">Company <i class="fa fa-angle-down"></i></a>
                  {#if showCompanyDropdown}
                      <ul class="submenu subdrop1">
                          <li class="nav-item">
                              <div class="row mx-0">
                                  <div class="col-xl-6">
                                      <a class="nav-link drop-p" href="/">
                                          <div class="mx-0 row">
                                              <div class="col-2">
                                                  <img class="building" src="images/about.png" alt="" />
                                              </div>
                                              <div class="offset-1 col-9">
                                                  <span class="normal-text">About Us</span>
                                                  <br>
                                                  <span class="small-text">Our Team and History</span>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                                  <!-- Repeat for other links -->
                              </div>
                          </li>
                      </ul>
                  {/if}
              </li>
          </ul>
      </div>

      <!-- Desktop Logo -->
      <a href="/" class="navbar-brand d-lg-block d-none">
          <img src="images/logo_desktop.png" class="logo_desktop" alt="">
      </a>

      <!-- Mobile Logo -->
      <a href="/" class="navbar-brand d-lg-none d-block">
          <img src="images/logo.png" class="logo_desktop" alt="" style="width: 158px;">
      </a>

      <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                  <a class="nav-link" href="/"> <span>Agency</span></a>
              </li>
              <li class="nav-item p-65">
                  <a class="nav-link inspect-btn contact-nav text-white" href="/">
                      <span class="text-white">
                          <i class="fa fa-phone"></i>&nbsp; +123456789
                      </span>
                  </a>
              </li>
          </ul>
      </div>
  </div>
</nav>

<header class="d-lg-none d-block">
  <!-- Mobile navigation button -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="mobile-nav-btn" on:click={toggleMobileNav}>
      &#9776;
  </div>

  <!-- Mobile navigation menu -->
  {#if showMobileNav}
      <div class="mobile-nav">
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="close-icon" on:click={closeMobileNav}>&times;</div>
          <ul>
              <li class="nav-item">
                  <a class="nav-link dropdown drop11" href="/" on:click={toggleProductsDropdown}>
                      <span>Products</span>
                  </a>
                  {#if showProductsDropdown}
                      <ul class="submenu subdrop11 subdrop10">
                          <!-- Repeat menu items -->
                      </ul>
                  {/if}
              </li>
              <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <li class="nav-item dropdown drop1" on:click={toggleCompanyDropdown}>
                  <a href="/" class="nav-link">Company <i class="fa fa-angle-down"></i></a>
                  {#if showCompanyDropdown}
                      <ul class="submenu subdrop1 subdrop10">
                          <!-- Repeat menu items -->
                      </ul>
                  {/if}
              </li>
          </ul>
      </div>
  {/if}
</header>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800&display=swap');

  /* Your CSS styles here */
</style>