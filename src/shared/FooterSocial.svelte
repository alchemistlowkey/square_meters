<script>
  export let SocialItem = [];
</script>

<ul class="d-flex">
  {#each SocialItem as linkItem}
    <li class="pe-lg-5 pe-md-5 pe-sm-4 pe-2 hover:text-[#F96B29]">
      <a href={linkItem.href} target="_blank">
        <i class={linkItem.icon}></i>
      </a>
    </li>
  {/each}
</ul>

<style>
</style>
