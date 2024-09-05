<script>
    export let IconDetails = [];
</script>

{#each IconDetails as IconDetail}
<div class="col-md-6 my-5 lg:text-lg md:text-base text-sm">
  <div class="row mx-0 text-[#F6FFFD]">
    <div class="col-3 col-md-3 col-xl-2">
      <img src={IconDetail.src} alt="" />
    </div>
    <div class="col-9 col-md-9 col-xl-8">
      <div class="fw-bold">{IconDetail.head}</div>
      <br />
      <div>{IconDetail.body}
      </div>
    </div>
  </div>
</div>
{/each}

<style>
</style>
