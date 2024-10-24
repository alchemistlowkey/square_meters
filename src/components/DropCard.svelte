<script>
  export let DropHeader = "";
  export let DropHeader2 = "";
  export let DropContent = "";
  export let DropContent2 = "";
  export let DropContent3 = "";
  export let DropBtn = "";
  export let DropLink = "";

</script>

<div class="col-md-10 offset-md-1 py-1">
  <div class="dropdown">
    {#if DropHeader}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        class="btn btn-white border-[#0D493D] px-16 w-[100%] text-start text-cgreen fw-semibold d-flex justify-content-between align-items-center"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {DropHeader}
        <!-- svelte-ignore a11y-missing-content -->
        <span class="dropdown-toggle"></span>
      </a>
    {/if}
    {#if DropHeader2}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a
        class="btn btn-white border-[#0D493D] w-[100%] text-center text-cgreen fw-bold lg:text-lg md:text-base text-sm d-flex align-items-center"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div class="container">
          <div class="row mx-0">
            <div class="col-3 col-sm-2">
              <span
                class="fw-medium float-start lg:text-lg md:text-base sm:text-sm text-xs text-start mx-0 px-0 text-nowrap"
                >Question :</span
              >
            </div>
            <div class="col-9 col-sm-10">
              <span
                class="xl:text-nowrap float-end sm:text-center sm:ps-0 ps-2 text-end lg:text-lg md:text-base sm:text-sm text-[10px] leading-3"
                >{DropHeader2}
                <!-- svelte-ignore a11y-missing-content -->
                <span class="dropdown-toggle ps-3"></span>
              </span>
            </div>
          </div>
        </div>
      </a>
    {/if}

    <div
      class="dropdown-content w-100 bg-cgreen text-w rounded lg:text-lg md:text-base text-sm"
    >
      <div class="w-[90%] mx-auto py-4">
        {#if DropContent}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="dropdown-item text-w text-wrap text-start">{DropContent}</a>
        {/if}
        {#if DropContent2}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="dropdown-item text-[#f6fffd] text-wrap text-start p-2"
            >{DropContent2}
            {#if DropLink}
              <a data-sveltekit-preload-code class="text-[#f6fffd] text-center my-3" href={DropLink.href}>
                <button
                  class="btn btn-[#f96b29] bg-[#f96b29] text-[#f6fffd] text-center"
                >
                  {DropLink.text}
                </button>
              </a>
            {/if}
          </a>
        {/if}
        {#if DropContent3}
          <!-- svelte-ignore a11y-missing-attribute -->
          <a class="dropdown-item text-[#f6fffd] text-wrap text-start p-2"
            >{DropContent3}</a
          >
        {/if}
        {#if DropBtn}
          <div class="text-start">
            <a data-sveltekit-preload-code href="https://form.jotform.com/242946612167562">
              <button class="btn mt-3 bg-[#f96b29] w-[200px] text-w"
              >{DropBtn}</button
              >
            </a>
          </div>
        {/if}
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
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
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

  .dropdown-content button:hover {
    background-color: #0d493d;
    border-color: #f96b29;
  }
</style>
