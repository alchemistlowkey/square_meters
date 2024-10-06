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
          <div class="row align-items-center">
            {#if linkItem.icon}
              <div
                class="col-12 ps-0 d-flex align-items-start hover:text-[#F96B29]"
              >
                <i class={linkItem.icon}></i>
                <span class="ml-2">{linkItem.text2}</span>
              </div>
            {/if}
            {#if !linkItem.icon}
              <div class="hover:text-[#F96B29] ps-0">
                {linkItem.text}
              </div>
            {/if}
          </div>
        </div>
      </a>
    </li>
  {/each}
</ul>

<style>
  .container .row {
    display: flex;
    align-items: center;
  }
  .col-12 {
    display: flex;
    align-items: center;
  }
  .ml-2 {
    margin-left: 10px; /* Adjust spacing as needed */
  }
</style>
