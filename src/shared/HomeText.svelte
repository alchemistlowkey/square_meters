<script>
  export let TextHeader = "";
  export let TextContent = "";
</script>

<div class="mt-5">
  <div class="w-100">
    <div class="mx-0 row">
      <div class="col-md-6">
        <span class="md:text-2xl lg:text-3xl text-base text-[#F96B29]">{TextHeader}</span>
      </div>
      <div class="col-md-6">
        <span
          class="ms-lg-0 ps-lg-0 lg:text-lg md:text-base text-sm pt-1 text-wrap float-end"
          >{TextContent}
        </span>
      </div>
    </div>
  </div>
</div>

<style>
</style>
