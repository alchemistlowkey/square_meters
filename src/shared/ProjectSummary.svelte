<script>
  export let ProjectDetails = [];
</script>

{#each ProjectDetails as ProjectDetail}
  <div class="col-lg-3 col-md-3 col-6 text-[#0D493D] py-5 text-center">
    <div class="fw-semibold text-lg py-2">{ProjectDetail.head}</div>
    <div class="fw-bold text-2xl">{ProjectDetail.body}</div>
  </div>
{/each}

<style>
</style>
