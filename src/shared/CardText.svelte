<script>
  export let TextHeader="";
  export let TextHeader2="";
  export let TextContent="";
  export let TextContent2="";
  export let TextContent3="";
  export let TextLink="";
  export let TextLinkText="";
</script>

<div class="row mx-0 py-md-10 py-3 p-text text-cgreen text-center">
  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
    {#if TextHeader}
    <div class="collection text-center">{TextHeader}</div>
    {/if}
    {#if TextHeader2}
    <div class="text-[#F96B29] md:text-3xl sm:text-xl text-lg fw-bold text-center">{TextHeader2}</div>
    {/if}
    {#if TextContent}
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent}
    </p>
    {/if}
    {#if TextContent2}
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent2}
    </p>
    {/if}
    {#if TextContent3}
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent3}
    </p>
    {/if}
    {#if TextLinkText}
    <a href={TextLink} class="md:text-md lg:text-lg text-sm fw-medium py-md-0" target="_blank">{TextLinkText}</a>
    <slot></slot>
    {/if}
  </div>
</div>

<style>
</style>
