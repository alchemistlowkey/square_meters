<script>
  export let SocialItem = [];
</script>

<div class="col-6 float-start pt-3">
  <ul class="d-flex">
    {#each SocialItem as linkItem}
      <li class="pe-3 pe-sm-4 pe-md-5 hover:text-[#F96B29]">
        <a href={linkItem.href} target="_blank">
          <i class={linkItem.icon}></i>
        </a>
      </li>
    {/each}
  </ul>
</div>

<style>
</style>
