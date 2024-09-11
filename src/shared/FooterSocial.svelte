<script>
  export let SocialItem = [];
</script>

<div class="col-6 float-start pt-3">
  <ul class="d-flex">
    {#each SocialItem as linkItem}
      <li class="px-1 px-sm-2 px-md-3 hover:text-[#F96B29]">
        <a href={linkItem.href} target="_blank">
          <i class={linkItem.icon}></i>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>

</style>
