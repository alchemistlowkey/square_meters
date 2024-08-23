<script>
  
</script>

<nav class="fixed top-0 left-1/2 mt-4 transform -translate-x-1/2 w-[90%] text-[#0D493D] rounded bg-[#F6FFFD] z-10">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Left Section -->
      <div class="flex items-center">
        <!-- Dropdown 1 -->
        <div class="relative dropdown group">
          <button class="inline-flex items-center px-3 py-2 hover:text-gray-900">
            Products
            <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div class="dropdown-menu absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 3</a>
          </div>
        </div>

        <!-- Dropdown 2 -->
        <div class="relative dropdown group ml-4">
          <button class="inline-flex items-center px-3 py-2  hover:text-gray-900">
            Company
            <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <!-- Dropdown Menu -->
          <div class="dropdown-menu absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 1</a>
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 2</a>
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 3</a>
            <a href="/" class="block px-4 py-2 hover:bg-gray-100">Item 4</a>
          </div>
        </div>
      </div>

      <!-- Center Logo -->
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-800">
          <img src="images/logo_desktop.png" class="logo_desktop w-20" alt="">
      </div>

      <!-- Right Section -->
      <div class="flex items-center">
        <a href="/agency" class=" hover:text-gray-900 mr-4">Agency</a>
        <button class="px-4 py-2 bg-[#0D493D] text-[#F6FFFD] rounded hover:bg-green-700">
          <a class="px-2" href="tel:+2348066267094">
            <i class="bi-telephone-fill px-2"></i>08066267094
          </a></button>
      </div>
    </div>
  </div>
</nav>

<style>
  /* Custom styles for handling dropdown visibility */
  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>