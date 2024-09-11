<script>
  export let FooterHead = "";
  export let FooterItem = [];
</script>

<h3 class="product">{FooterHead}</h3>
<ul class="list-unstyled mt-3">
  {#each FooterItem as linkItem}
    <li class="list-unstyled pt-2">
      <a href={linkItem.href}>
        <div class="container">
          <div class="row">
            {#if linkItem.icon}
              <div class="col-1">
                <i class={linkItem.icon}></i>
              </div>
              <div class="col-11">
                {linkItem.text2}
              </div>
            {/if}
            {#if !linkItem.icon}
              {linkItem.text}
            {/if}
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
</style>
