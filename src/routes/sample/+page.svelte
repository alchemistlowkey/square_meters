<div class="dropdown">
  <button>Dropdown 1</button>
  <div class="dropdown-content">
      <a href="#option1">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 1.</div>
          </div>
      </a>
      <a href="#option2">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 2, giving more detail.</div>
          </div>
      </a>
      <a href="#option3">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 3.</div>
          </div>
      </a>
  </div>
</div>

<div class="dropdown">
  <button>Dropdown 2</button>
  <div class="dropdown-content">
      <a href="#option1">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 1.</div>
          </div>
      </a>
      <a href="#option2">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 2, giving more detail.</div>
          </div>
      </a>
      <a href="#option3">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 3.</div>
          </div>
      </a>
  </div>
</div>

<div class="dropdown">
  <button>Dropdown 3</button>
  <div class="dropdown-content">
      <a href="#option1">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 1.</div>
          </div>
      </a>
      <a href="#option2">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 2, giving more detail.</div>
          </div>
      </a>
      <a href="#option3">
          <div class="option-content">
              <div class="option-description">This is a brief description of Option 3.</div>
          </div>
      </a>
  </div>
</div>

<style>
  /* Dropdown container */
  .dropdown {
      position: relative;
      margin-bottom: 10px; /* Adds space between dropdowns */
  }

  /* Dropdown button */
  .dropdown button {
      background-color: #4CAF50;
      color: white;
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      width: 100%; /* Makes the button full-width */
      box-sizing: border-box; /* Ensures padding is included in width */
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
      display: none;
      position: relative; /* Changed to relative */
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      margin-top: 5px; /* Adds a small space between the button and the content */
  }

  /* Links inside the dropdown */
  .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
  }

  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
      background-color: #f1f1f1;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
      display: block;
  }

  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover button {
      background-color: #3e8e41;
  }
</style>