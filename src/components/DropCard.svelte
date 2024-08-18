<script>
  export let DropHeader = "Growth Hacker";
  export let DropContent =
    "We seek the expertise of an experience marketing specialist to drive a 360 degree marketing campaign and customer experience which leads to customer retention and sales";
</script>

<div class="col-md-10 offset-md-1 py-1">
  <div class="dropdown">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a
      class="btn btn-white border-[#0D493D] px-16 w-[100%] text-start text-cgreen fw-semibold"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {DropHeader}
      <!-- svelte-ignore a11y-missing-content -->
      <a class="dropdown-toggle float-end"></a>
    </a>

    <div class="dropdown-content w-100 bg-cgreen text-w rounded">
        <div class="w-[90%] mx-auto py-4">
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="dropdown-item text-w text-wrap fs-6"
            >{DropContent}</a
          >
          <div class="">
            <button class="btn mt-3 bg-[#f96b29] w-[200px] text-w">Apply</button>
          </div>
        </div>
    </div>
  </div>
</div>

<style>
  .text-w {
    color: #f6fffd;
  }

  .text-cgreen {
    color: #0d493d;
  }

  .bg-cgreen {
    background-color: #0d493d;
  }
  .dropdown-item:hover {
    background-color: #0d493d;
  }
  /* Dropdown content (hidden by default) */
  .dropdown-content {
      display: none;
      position: relative; /* Changed to relative */
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      margin-top: 5px; /* Adds a small space between the button and the content */
  }

  /* Links inside the dropdown */
  .dropdown-content a {
      text-decoration: none;
      display: block;
  }

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
      display: block;
  }

  .dropdown-content button:hover{
    background-color: #e2b7a0;
  }
</style>
