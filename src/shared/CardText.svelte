<script>
  export let TextHeader="";
  export let TextContent="";
  export let TextContent2="";
  export let TextContent3="";
</script>

<div class="row mx-0 py-10 p-text text-cgreen text-center">
  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
    <div class="collection text-center">{TextHeader}</div>
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent}
    </p>
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent2}
    </p>
    <p class="py-2 md:text-md lg:text-lg text-sm py-md-3">
      {TextContent3}
    </p>
    <slot></slot>
  </div>
</div>

<style>
</style>
