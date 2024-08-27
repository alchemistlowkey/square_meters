<script>
  export let TextHeader = "";
  export let TextContent = "";
</script>

<div class="mt-4">
  <div class="w-100">
    <div class="mx-0 row">
      <div class="col-md-6">
        <span class="seamingly">{TextHeader}</span>
      </div>
      <div class="col-md-6">
        <span
          class="seamingly-text ms-lg-0 ps-lg-0 md:text-base lg:text-lg text-sm text-wrap"
          >{TextContent}
        </span>
      </div>
    </div>
  </div>
</div>

<style>
</style>
