<script>
    import NavDropCard from "../shared/NavDropCard.svelte";
  
    let isMenuOpen = false;
  
    let isMobileProductsDropdownOpen = false;
    let isMobileCompanyDropdownOpen = false;
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
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
  </script>
  
  <nav
    class="fixed top-0 left-1/2 mt-4 transform -translate-x-1/2 w-[90%] text-[#0D493D] rounded bg-[#F6FFFD] z-10"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Left Section: Hidden on mobile -->
        <div class="hidden md:flex items-center">
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                <a href="/">Link 1</a>
                <a href="/">Link 2</a>
                <a href="/">Link 3</a>
                </div>
              </div>
          <!-- Dropdown 1 -->
          <div class="dropdown">
            <button
              class="dropbtn hover:text-[#f96b29]"
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
              class="dropdown-menu container absolute left-0 w-80 bg-[#F6FFFD] border-[#f96b29] rounded-md shadow-lg hidden"
            >
              <NavDropCard
                dropheader="Land"
                droptext="Fitila Signatures"
                dropimg="images/land_icon.png"
                droplink="/fitila-signature"
              />
  
              <NavDropCard
                dropheader="Investment"
                droptext="Up to 25% ROI"
                dropimg="images/investment_icon.png"
                droplink="/investment"
              />
            </div>
          </div>
  
          <!-- Dropdown 2 -->
          <div class="relative dropdown ml-4" id="company-dropdown">
            <button
              class="inline-flex items-center px-3 py-2 hover:text-[#f96b29] focus:outline-none"
              aria-haspopup="true"
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
              class={`dropdown-menu absolute left-0 mt-2 w-80 bg-white border-[#f96b29] rounded-md shadow-lg hidden`}
            >
              <NavDropCard
                dropheader="About Us"
                droptext="Our Team and Who we are"
                dropimg="images/about_icon.png"
                droplink="/about-us"
              />
  
              <NavDropCard
                dropheader="Our News"
                droptext="In and around SquareMetres"
                dropimg="images/news_icon.png"
                droplink="/blog"
              />
  
              <NavDropCard
                dropheader="Career"
                droptext="Join Now"
                dropimg="images/career_icon.png"
                droplink="/career"
              />
  
              <NavDropCard
                dropheader="FAQ's"
                droptext="Got Questions, We've answers"
                dropimg="images/faq_icon.png"
                droplink="/faq"
              />
  
              <NavDropCard
                dropheader="Contact Us"
                droptext="Reach us with ease"
                dropimg="images/contact_icon.png"
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
                droplink="/fitila-signature"
              />
  
              <NavDropCard
                dropheader="Investment"
                droptext="Up to 25% ROI"
                dropimg="images/investment_icon.png"
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
                droplink="/about-us"
              />
  
              <NavDropCard
                dropheader="Our News"
                droptext="In and around SquareMetres"
                dropimg="images/news_icon.png"
                droplink="/news"
              />
  
              <NavDropCard
                dropheader="Career"
                droptext="Join Now"
                dropimg="images/career_icon.png"
                droplink="/career"
              />
  
              <NavDropCard
                dropheader="FAQ's"
                droptext="Got Questions, We've answers"
                dropimg="images/faq_icon.png"
                droplink="/faq"
              />
  
              <NavDropCard
                dropheader="Contact Us"
                droptext="Reach us with ease"
                dropimg="images/contact_icon.png"
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
    .dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
  </style>