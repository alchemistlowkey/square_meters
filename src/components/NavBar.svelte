<script>
  let isMobileMenuOpen = false;
  let openDropdown = '';

  function toggleDropdown(dropdownName) {
    openDropdown = openDropdown === dropdownName ? '' : dropdownName;
  }

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (!isMobileMenuOpen) {
      openDropdown = '';
    }
  }
</script>

<nav>
  <div class="navbar">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="start">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="menu-icon" on:click={toggleMobileMenu}>&#9776;</div>
      <div class={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <div class="dropdown">
          <a href="/" on:click|preventDefault={() => toggleDropdown('products')}>
            PRODUCTS &#9662;
          </a>
          <div class={`dropdown-menu ${openDropdown === 'products' ? 'active' : ''}`}>
            <a href="/">LAND</a>
            <a href="/">INVESTMENT</a>
          </div>
        </div>
        <div class="dropdown">
          <a href="/" on:click|preventDefault={() => toggleDropdown('company')}>
            COMPANY &#9662;
          </a>
          <div class={`dropdown-menu ${openDropdown === 'company' ? 'active' : ''}`}>
            <a href="/">ABOUT US</a>
            <a href="/">FAQ</a>
            <a href="/">OUR NEWS</a>
            <a href="/">CONTACT US</a>
            <a href="/">CAREERS</a>
          </div>
        </div>
      </div>
    </div>

    <div class="logo"></div>

    <!-- AGENCY and Phone Number -->
    <div class="end">
      <div class="agency">AGENCY</div>
      <div class="contact">
        <a href="tel:+2348066267094">
          <i class="bi-telephone-fill"><span>08066267094</span></i>
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
    width: 90%;
    margin: 10px auto 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-radius: 10px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .start {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .end {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .navbar-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .navbar-links a {
    text-decoration: none;
    color: white;
  }

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: white;
    color: black;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    min-width: 150px;
    padding: 0.5rem 0;
    z-index: 1;
  }

  .dropdown-menu a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: black;
    display: block;
  }

  .dropdown-menu a:hover {
    background-color: #ddd;
  }

  .dropdown.active .dropdown-menu,
  .dropdown-menu.active {
    display: block;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .navbar-links {
      display: none;
      flex-direction: column;
      width: 100%;
      text-align: left;
      background-color: #333;
      position: absolute;
      top: 100%;
      left: 0;
      padding: 1rem;
      border-radius: 0 0 10px 10px;
    }

    .navbar-links.active {
      display: flex;
    }

    .menu-icon {
      display: block;
    }

    .dropdown-menu {
      position: relative;
      box-shadow: none;
      width: 100%;
    }

    .dropdown-menu a {
      padding: 1rem;
      color: white;
    }

    .dropdown-menu.active {
      display: block;
    }

    .logo {
      align-self: center;
      margin: 1rem 0;
    }

    .end {
      display: none;
    }
  }

  .logo {
    background-image: url("../lib/img/logo_desktop.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 40px;
    margin: 0 auto;
  }
</style>
