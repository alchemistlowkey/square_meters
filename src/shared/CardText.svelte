<script>
  export let TextHeader = "";
  export let TextHeader2 = "";
  export let TextContent = [];
  export let TextLink = "";
  export let TextLinkText = "";
</script>

<div
  class="row mx-0 py-md-10 py-3 p-text text-cgreen text-center text-xs md:text-base lg:text-lg"
>
  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
    {#if TextHeader}
      <div class="collection text-center fs-4">{TextHeader}</div>
    {/if}
    {#if TextHeader2}
      <div
        class="text-[#F96B29] md:text-3xl sm:text-xl text-lg fw-bold text-center"
      >
        {TextHeader2}
      </div>
    {/if}
    {#if TextContent}
      <ul>
        {#each TextContent as TextItem}
          <li class="list-unstyled pt-2">
            <p class="py-2 py-md-3">
              {TextItem.body}
            </p>
          </li>
        {/each}
      </ul>
    {/if}
    
    {#if TextLinkText}
      <a href={TextLink} class="fw-medium py-md-0" target="_blank"
        >{TextLinkText}</a
      >
      <slot></slot>
    {/if}
  </div>
</div>

<style>
</style>
