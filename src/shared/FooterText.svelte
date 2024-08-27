<script>
  export let FooterHead = "";
  export let FooterItem = [];
</script>

<h3 class="product">{FooterHead}</h3>
<ul class="list-unstyled mt-3">
  {#each FooterItem as linkItem}
    <li class="list-unstyled pt-2">
      <a href={linkItem.href}>
        {#if linkItem.icon}
          <span class="pe-1">
            <i class={linkItem.icon}></i>
          </span>
        {/if}
        {linkItem.text}</a
      >
    </li>
  {/each}
</ul>

<style>
</style>
