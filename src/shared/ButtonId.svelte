<script>
  export let btnDetails = "";
  export let btnlink = "";
  export let fullLength = false;
</script>

<div class="fs-4">
  <a data-sveltekit-preload-code
    class="btn bg-[#f96b29] hover:bg-[#0d493d] text-[#f6fffd] hover:text-[#f6fffd] border-[#0d493d] hover:border-[#f96b29] py-3 px-20 md:text-base lg:text-lg text-sm fw-medium"
    role="button"
    class:fullLength
    href={btnlink}
  >
    {btnDetails}
  </a>
</div>

<style>
  .fullLength {
    width: 100%;
  }
</style>
