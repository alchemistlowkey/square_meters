<script>
  export let Lists = [];
</script>

<div class="flex flex-col space-y-2 md:space-y-0 text-sm md:text-base text-[#0D493D] lg:text-lg my-3 fw-medium">
  {#each Lists as List}
    <div class="flex flex-wrap items-center">
      <div class="w-1/12 text-center rounded-5 border-[#0D493D] border-1 py-3 md:py-4 lg:my-2">{List.Number}</div>
      <div class="w-11/12 py-3 md:py-4 ps-2">{List.Text}</div>
    </div>
  {/each}
</div>

<style></style>
