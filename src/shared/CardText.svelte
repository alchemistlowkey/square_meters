<script>
  import Bg from "./Bg.svelte";

  export let TextHeader = "";
  export let TextHeader2 = "";
  export let TextContent = [];
  export let TextLink = "";
  export let TextLinkText = "";
  export let BgGreen = false;
</script>

<div
  class="row mx-0 py-md-10 py-3 p-text text-[#0D493D] text-center text-sm md:text-base lg:text-lg"
>
  <div class="col-md-10 offset-md-1">
    {#if TextHeader}
      <div class="collection text-center md:text-base lg:text-lg text-sm">{TextHeader}</div>
    {/if}
    {#if TextHeader2}
      <div
        class="text-[#F96B29] md:text-base lg:text-lg text-sm fw-bold text-center"
      >
        {TextHeader2}
      </div>
    {/if}
    {#if TextContent}
      <ul>
        {#each TextContent as TextItem}
          <li class="list-unstyled pt-2">
            <p class="py-2 fw-medium">
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

{#if BgGreen}
<div
  class="row mx-0 py-md-10 text-[#F6FFFD] py-3 p-text text-center text-xs md:text-base lg:text-lg"
>
  <div class="col-md-10 offset-md-1">
    <div
      class="text-[#F6FFFD] text-center text-base md:text-lg lg:text-xl pb-2 font-bold"
    >
      {BgGreen.head}
    </div>
    <p class="py-2 py-md-3 text-[#F6FFFD]">{BgGreen.body}
    </p>
  </div>
</div>
{/if}

<style>
</style>
