<script>
  export let Lists = [];
</script>

<div class="row mx-0 text-sm md:text-base text-[#0D493D] lg:text-lg my-3">
  {#each Lists as List}
    <div class="col-1 rounded-5 border-[#0D493D] border-1 py-3 py-md-4 text-center my-2 fw-medium">{List.Number}</div>
    <div class="col-11 fw-medium py-3 py-md-4">{List.Text}</div>
  {/each}
</div>

<style></style>
