<script>
  import { onMount } from "svelte";

  let isBrowser = false;

  onMount(() => {
    isBrowser = true;

    // Ensure DOMContentLoaded and other DOM operations only run in the browser
    if (typeof document !== "undefined") {
      document.addEventListener("DOMContentLoaded", function () {
        const mobileNavBtn = document.querySelector(".mobile-nav-btn");
        const mobileNav = document.querySelector(".mobile-nav");
        const closeIcon = document.querySelector(".close-icon");

        if (mobileNavBtn && mobileNav && closeIcon) {
          mobileNavBtn.addEventListener("click", function () {
            mobileNav.style.display = "block";
          });

          closeIcon.addEventListener("click", function () {
            mobileNav.style.display = "none";
          });
        }
      });

      document
        .querySelectorAll("ul.nav li.dropdown")
        .forEach(function (element) {
          element.addEventListener("mouseenter", function () {
            const dropdownMenu = element.querySelector(".dropdown-menu");
            if (dropdownMenu) {
              dropdownMenu.style.display = "block";
            }
          });

          element.addEventListener("mouseleave", function () {
            const dropdownMenu = element.querySelector(".dropdown-menu");
            if (dropdownMenu) {
              dropdownMenu.style.display = "none";
            }
          });
        });
    }
  });

  function toggleDropdown() {
    toggleVisibility(".subdrop1");
  }

  function toggleDropdown1() {
    toggleVisibility(".subdrop10");
  }

  function toggleDropdown2() {
    toggleVisibility(".subdrop11");
  }

  function toggleVisibility(selector) {
    if (isBrowser) {
      const dropdownContent = document.querySelector(selector);
      if (dropdownContent) {
        dropdownContent.classList.toggle("d-none");
        dropdownContent.classList.toggle("d-block");
      }
    }
  }
</script>

<nav class="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
  <div class="container desktop_nav">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown drop11">
          <a
            class="nav-link"
            aria-current="page"
            on:click={toggleDropdown2}
            href="/"
          >
            <span> Products <i class="fa fa-angle-down"></i></span></a
          >
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
                        <br />
                        <span class="small-text">Fitila Signatures</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="col-xl-12">
                  <a class="nav-link drop-p" href="/">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img
                          class="building"
                          src="images/investment.png"
                          alt=""
                        />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">Investment</span>
                        <br />
                        <span class="small-text">Up to 25% ROI</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>

        <li class="nav-item dropdown drop1">
            <a
              class="nav-link"
              aria-current="page"
              on:click={toggleDropdown}
              href="/"
            >
              <span> Company <i class="fa fa-angle-down"></i></span></a
            >
          <ul class="submenu subdrop1">
            <li class="nav-item">
              <div class="row mx-0">
                <div class="col-xl-6">
                  <a class="nav-link drop-p" href="about-us">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img class="building" src="images/about.png" alt="" />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">About Us</span>
                        <br />
                        <span class="small-text">Our Team and History</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-xl-6">
                  <a class="nav-link drop-p" href="faq">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img class="building" src="images/faq.png" alt="" />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">Faq</span>
                        <br />
                        <span class="small-text">frequent asked question</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-xl-6">
                  <a class="nav-link drop-p" href="/">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img class="building" src="images/news.png" alt="" />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">Our News</span>
                        <br />
                        <span class="small-text"
                          >In and around SquareMetres<span> </span></span
                        >
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-xl-6">
                  <a class="nav-link drop-p" href="/">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img class="building" src="images/contact.png" alt="" />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">Contact Us</span>
                        <br />
                        <span class="small-text"
                          >Reach us with ease<span> </span></span
                        >
                      </div>
                    </div>
                  </a>
                </div>

                <div class="col-xl-6">
                  <a class="nav-link drop-p" href="career">
                    <div class="mx-0 row">
                      <div class="col-2">
                        <img class="building" src="images/carreer.png" alt="" />
                      </div>
                      <div class="offset-1 col-9">
                        <span class="normal-text">Careers</span>
                        <br />
                        <span class="small-text"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <li class="nav-item float-md-start" style="list-style:none;">
        <a href="/" class="navbar-brand d-lg-block d-none"
          ><img
            src="images/logo_desktop.png"
            class="logo_desktop d-lg-block d-none"
            alt=""
          /></a
        >
      </li>

      <li class="nav-item float-end" style="list-style:none;">
        <a href="/" class="navbar-brand d-lg-none d-block"
          ><img
            src="images/logo.png"
            class="logo_desktop d-lg-none d-block"
            alt=""
            style="    width: 158px;
            "
          /></a
        >
      </li>
    </div>
    <button
      class="navbar-toggler d-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="projects">
            <span> Agency</span></a
          >
        </li>

        <li class="nav-item p-65">
          <a
            class="nav-link inspect-btn contact-nav text-white"
            href="schedule-inspection"
            ><span class="text-white"><i class="bi-telephone"></i>whatsapp</span
            >
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<header class="d-lg-none d-block">
  <!-- Mobile navigation button -->
  <div class="mobile-nav-btn">&#9776;</div>

  <!-- Mobile navigation menu -->
  <div class="mobile-nav">
    <div class="close-icon">&times;</div>
    <ul>
      <li class="nav-item">
        <a
          class="nav-link dropdown drop11"
          aria-current="page"
          href="our-product"
          on:click={toggleDropdown2}
        >
          <span> Products</span></a
        >
        <ul class="submenu subdrop11 subdrop10">
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
                      <br />
                      <span class="small-text">Fitila Signatures</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xl-12">
                <a class="nav-link drop-p" href="/">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img
                        class="building"
                        src="images/investment.png"
                        alt=""
                      />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Investment</span>
                      <br />
                      <span class="small-text">Up to 25% ROI</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown drop1">
        <a
          class="nav-link"
          aria-current="page"
          on:click={toggleDropdown}
          href="/"
        >
          <span> Company <i class="fa fa-angle-down"></i></span></a
        >

        <ul class="submenu subdrop1 subdrop10">
          <li class="nav-item">
            <div class="row mx-0">
              <div class="col-xl-6">
                <a class="nav-link drop-p" href="about-us">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/building.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">About Us</span>
                      <br />
                      <span class="small-text">Our Team and History</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xl-6">
                <a class="nav-link drop-p" href="career">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/building.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Careers</span>
                      <br />
                      <span class="small-text"></span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-xl-6">
                <a class="nav-link drop-p" href="/">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/question.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Why Squaremetres?</span>
                      <br />
                      <span class="small-text"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-xl-6">
                <a class="nav-link drop-p" href="faq">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/building.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Faq</span>
                      <br />
                      <span class="small-text">frequent asked question</span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-xl-6">
                <a class="nav-link drop-p" href="/">
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/news.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Our News</span>
                      <br />
                      <span class="small-text"><span> </span></span>
                    </div>
                  </div>
                </a>
              </div>

              <div class="col-xl-6">
                <a
                  class="nav-link drop-p"
                  href="https://api.whatsapp.com/send?phone=->whatsapp }}&amp;text=Hello"
                >
                  <div class="mx-0 row">
                    <div class="col-2">
                      <img class="building" src="images/building.svg" alt="" />
                    </div>
                    <div class="offset-1 col-9">
                      <span class="normal-text">Contact us</span>
                      <br />
                      <span class="small-text"><span> </span></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" aria-current="page" href="/">
          <span> Agency</span></a
        >
      </li>

      <li class="nav-item">
        <a
          class="nav-link inspect-btn contact-nav text-white"
          href="schedule-inspection"
          ><a class="" href="tel:+2348066267094">
            <i class="bi-telephone-fill">+2348066267094</i>
          </a>
        </a>
      </li>
    </ul>
  </div>
</header>
<div class="col-12 banner-ease">
  <p>&nbsp;</p>

  <p>&nbsp;</p>

  <p>&nbsp;</p>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,700;1,800&display=swap");

  /* Mobile navigation button */
  .mobile-nav-btn {
    display: block;
    position: fixed;
    top: 20px;
    right: 30px;
    font-size: 30px;
    cursor: pointer;
    z-index: 9999;
  }

  /* Mobile navigation menu */
  .mobile-nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffffe6;
    z-index: 999999999;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .mobile-nav ul {
    list-style: none;
    margin-top: 123px;
    padding: 0;
  }

  .mobile-nav ul li {
    margin: 10px 0;
  }

  .mobile-nav a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
    transition: color 0.3s;
  }

  /* Close icon */
  .close-icon {
    position: absolute;
    top: 20px;
    right: 43%;
    font-size: 58px;
    cursor: pointer;
    color: #ff7a00;
  }

  .mobile-nav a:hover {
    color: #ff7a00;
  }

  /* Dropdown menu styles */

  img.building {
    width: 24px;
  }

  .subdrop11 {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    top: 100%;
    left: 0;
    z-index: 999;
    width: 301px;
    padding: 6px;
    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
    box-shadow: 0px 3px 4px #80808078;
  }

  .dropdown.drop11 .subdrop11 {
    /* display: block; */
    line-height: 5px;
    opacity: 1;
    pointer-events: auto;
    list-style: none;
  }

  .dropdown.drop1 .subdrop1 {
    display: none;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;
    top: 100%;
    left: 0;
    z-index: 999;
    width: 301px;
    padding: 6px;
    border-bottom-right-radius: 9px;
    border-bottom-left-radius: 9px;
    box-shadow: 0px 3px 4px #80808078;
  }

  .dropdown.drop1 .subdrop1 {
    /* display: block; */
    line-height: 5px;
    opacity: 1;
    pointer-events: auto;
    list-style: none;
  }

  @media (min-width: 768px) {
    .dropdown.drop1 .subdrop1 {
      width: 600px;
      /* left: -149%; */
    }
  }

  .submenu > li {
    border-bottom-color: gray;
    border-bottom: 0.5px solid #80808038;
  }

  @media (min-width: 768px) {
    .dropdown.drop1 .navbar-light .navbar-nav .nav-link {
      padding: 17px 4px;
    }

    img.building {
      width: 45px;
    }
  }

  @media (max-width: 768px) {
    .dropdown.drop1 .subdrop1 {
      margin-top: 0px;
    }

    .dropdown.drop1:hover .subdrop1,
    .dropdown.drop11:hover .subdrop11 {
      display: block;
    }

    .dropdown.drop11 .subdrop11 {
      /* display: none; */
      position: relative;
      left: 0px;
      width: 100%;
    }

    .dropdown.drop1 .subdrop1 {
      /* display: none; */
      position: relative;
      left: 0px;
      width: 100%;
    }
  }

  .inspect-btn {
    display: inline-flex;
    padding: 12px 18px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    border: 1px solid #141414;
  }

  .normal-text {
    color: #0d493d;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .small-text {
    color: #13705d;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .submenu > li {
    border-bottom: 0.5px solid #80808000;
  }

  a.nav-link.drop-p {
    padding: 13px 0px !important;
  }

  .logo_desktop {
    width: 92px;
  }

  .desktop_nav {
    border-radius: 10px;
    background: #f6fffd;
    box-shadow: 0px 10px 20px 0px rgba(131, 131, 131, 0.25);
  }

  .p-65 {
    padding-right: 26px;
  }
</style>
