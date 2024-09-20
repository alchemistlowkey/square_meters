<script>
    export let TextContent = [];
</script>

{#each TextContent as textcontent}
<div class="col-lg-3 col-4 text-center">
  <p class="fw-light">{textcontent.head}</p>
  <p class="fw-bold my-2">{textcontent.body}</p>
</div>
{/each}

<style>
</style>
