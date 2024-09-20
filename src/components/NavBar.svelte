<script>
  import { onMount, onDestroy } from "svelte";
  import NavDropCard from "../shared/NavDropCard.svelte";

  let isMenuOpen = false;
  let isProductsDropdownOpen = false;
  let isCompanyDropdownOpen = false;

  let isMobileProductsDropdownOpen = false;
  let isMobileCompanyDropdownOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleProductsDropdown() {
    if (isCompanyDropdownOpen) {
      isCompanyDropdownOpen = false; // Close the other dropdown
    }
    isProductsDropdownOpen = !isProductsDropdownOpen;
  }

  function toggleCompanyDropdown() {
    if (isProductsDropdownOpen) {
      isProductsDropdownOpen = false; // Close the other dropdown
    }
    isCompanyDropdownOpen = !isCompanyDropdownOpen;
  }

  function toggleMobileProductsDropdown() {
    if (isMobileCompanyDropdownOpen) {
      isMobileCompanyDropdownOpen = false;  // Close the other dropdown
    }
    isMobileProductsDropdownOpen = !isMobileProductsDropdownOpen;
  }

  function toggleMobileCompanyDropdown() {
    if (isMobileProductsDropdownOpen) {
      isMobileProductsDropdownOpen = false;  // Close the other dropdown
    }
    isMobileCompanyDropdownOpen = !isMobileCompanyDropdownOpen;
  }

  let handleClickOutside;

  onMount(() => {
    handleClickOutside = (event) => {
      const dropdowns = ["products-dropdown", "company-dropdown"];
      const clickedOutside = !dropdowns.some((id) =>
        document.getElementById(id)?.contains(event.target)
      );
      if (clickedOutside) {
        closeDropdowns();
      }
    };

    document.addEventListener("click", handleClickOutside);

    onDestroy(() => {
      document.removeEventListener("click", handleClickOutside);
    });
  });

  function closeDropdowns() {
    isProductsDropdownOpen = false;
    isCompanyDropdownOpen = false;
    isMobileProductsDropdownOpen;  // Close mobile dropdowns
    isMobileCompanyDropdownOpen;   // Close mobile dropdowns
  }
</script>

<nav
  class="fixed top-0 left-1/2 mt-4 transform -translate-x-1/2 w-[90%] text-[#0D493D] rounded bg-[#F6FFFD] z-10"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Left Section: Hidden on mobile -->
      <div class="hidden md:flex items-center">
        <!-- Dropdown 1 -->
        <div class="relative dropdown" id="products-dropdown">
          <button
            on:click={toggleProductsDropdown}
            class="inline-flex items-center px-3 py-4 hover:text-[#f96b29] focus:outline-none"
            aria-haspopup="true"
            aria-expanded={isProductsDropdownOpen}
          >
            Products
            <svg
              class="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div
            class={`dropdown-menu container absolute left-0 w-80 bg-[#F6FFFD] border-[#f96b29] rounded-md shadow-lg ${isProductsDropdownOpen ? "block" : "hidden"}`}
          >
            <NavDropCard
              dropheader="Land"
              droptext="Fitila Signatures"
              dropimg="images/land_icon.png"
              dropimgalt="Land Icon"
              droplink="/fitila-signature"
            />

            <NavDropCard
              dropheader="Investment"
              droptext="Up to 25% ROI"
              dropimg="images/investment_icon.png"
              dropimgalt="Investment Icon"
              droplink="/investment"
            />
          </div>
        </div>

        <!-- Dropdown 2 -->
        <div class="relative dropdown ml-4" id="company-dropdown">
          <button
            on:click={toggleCompanyDropdown}
            class="inline-flex items-center px-3 py-4 hover:text-[#f96b29] focus:outline-none"
            aria-haspopup="true"
            aria-expanded={isCompanyDropdownOpen}
          >
            Company
            <svg
              class="ml-1 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div
            class={`dropdown-menu absolute left-0 w-[350px] bg-white border-[#f96b29] rounded-md shadow-lg ${isCompanyDropdownOpen ? "block" : "hidden"}`}
          >
            <NavDropCard
              dropheader="About Us"
              droptext="Our Team and Who we are"
              dropimg="images/about_icon.png"
              dropimgalt="About Us Icon"
              droplink="/about-us"
            />

            <NavDropCard
              dropheader="Our News"
              droptext="In and around SquareMetres"
              dropimg="images/news_icon.png"
              dropimgalt="News Icon"
              droplink="/news"
            />

            <NavDropCard
              dropheader="Career"
              droptext="Join Now"
              dropimg="images/career_icon.png"
              dropimgalt="Career Icon"
              droplink="/career"
            />

            <NavDropCard
              dropheader="FAQ's"
              droptext="Got Questions, We've answers"
              dropimg="images/faq_icon.png"
              dropimgalt="FAQ Icon"
              droplink="/faq"
            />

            <NavDropCard
              dropheader="Contact Us"
              droptext="Reach us with ease"
              dropimg="images/contact_icon.png"
              dropimgalt="Contact Us Icon"
              droplink="/contact-us"
            />
          </div>
        </div>
      </div>

      <!-- Center Logo -->
      <div class="flex items-center">
        <a href="/" class="text-xl">
          <img
            src="/images/logo_desktop.png"
            class="logo_desktop w-20"
            alt="Company Logo"
            loading="lazy"
          />
        </a>
      </div>

      <!-- Right Section: Hidden on mobile -->
      <div class="hidden md:flex items-center">
        <a href="/agency" class="hover:text-[#f96b29] mr-4">Agency</a>
        <button
          class="px-4 btn btn-sm py-2 bg-[#0D493D] text-[#F6FFFD] rounded hover:bg-[#f96b29] hover:border-[#0d493d]"
        >
          <a class="px-2" href="tel:+2348066267094">
            <i class="bi-telephone-fill px-2"></i>08066267094
          </a>
        </button>
      </div>

      <!-- Hamburger Menu: Visible on mobile -->
      <div class="flex md:hidden items-center">
        <button
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-[#0D493D] hover:text-[#13705D] btn hover:border-[#0D493D] hover:bg-[#f96b29] focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu: Hidden by default, visible when the menu is open -->
    <div class={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button
          on:click={toggleMobileProductsDropdown}
          class="block w-full text-left px-0 py-2 rounded-md text-base font-medium text-[#0D493D] hover:text-[#13705D] hover:bg-gray-100"
          >Products
          <svg
            class="inline-block ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {#if isMobileProductsDropdownOpen}
          <div class="pl-4">
            <NavDropCard
              dropheader="Land"
              droptext="Fitila Signatures"
              dropimg="images/land_icon.png"
              dropimgalt="Land Icon"
              droplink="/fitila-signature"
            />

            <NavDropCard
              dropheader="Investment"
              droptext="Up to 25% ROI"
              dropimg="images/investment_icon.png"
              dropimgalt="Investment Icon"
              droplink="/investment"
            />
          </div>
        {/if}

        <button
          on:click={toggleMobileCompanyDropdown}
          class="block w-full text-left px-0 py-2 rounded-md text-base font-medium text-[#0D493D] hover:text-[#13705D] hover:bg-gray-100"
          >Company
          <svg
            class="inline-block ml-1 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {#if isMobileCompanyDropdownOpen}
          <div class="pl-4">
            <NavDropCard
              dropheader="About Us"
              droptext="Our Team and Who we are"
              dropimg="images/about_icon.png"
              dropimgalt="About Us Icon"
              droplink="/about-us"
            />

            <NavDropCard
              dropheader="Our News"
              droptext="In and around SquareMetres"
              dropimg="images/news_icon.png"
              dropimgalt="News Icon"
              droplink="/news"
            />

            <NavDropCard
              dropheader="Career"
              droptext="Join Now"
              dropimg="images/career_icon.png"
              dropimgalt="Career Icon"
              droplink="/career"
            />

            <NavDropCard
              dropheader="FAQ's"
              droptext="Got Questions, We've answers"
              dropimg="images/faq_icon.png"
              dropimgalt="FAQ Icon"
              droplink="/faq"
            />

            <NavDropCard
              dropheader="Contact Us"
              droptext="Reach us with ease"
              dropimg="images/contact_icon.png"
              dropimgalt="Contact Us Icon"
              droplink="/contact-us"
            />
          </div>
        {/if}

        <a
          href="/agency"
          class="block px-0 py-2 rounded-md text-base font-medium text-[#0D493D] hover:text-[#13705D] hover:bg-gray-100"
          >Agency</a
        >
        <a
          href="tel:+2348066267094"
          class="block px-2 py-2 w-40 rounded-md text-base font-medium bg-[#0D493D] btn hover:border-[#0D493D] hover:bg-[#f96b29] text-[#F6FFFD]"
          ><i class="bi-telephone-fill pr-1"></i>08066267094</a
        >
      </div>
    </div>
  </div>
</nav>

<style>
  .dropdown:hover .dropdown-menu,
  .dropdown:focus-within .dropdown-menu {
    display: block;
  }
</style>