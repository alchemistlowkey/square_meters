<script>
  export let CardHeader = "";
  export let CardContent = "";
  export let CardContent2 = "";
  export let CardContent3 = "";
  export let SpanContent = "";
</script>

<div class="container">
  <div class="row mx-0 py-16">
    <div class="col-12 col-md-10 offset-md-1 py-10 mx-auto text-center md:text-lg lg:text-xl text-base">
      <p class="career text-w pb-3">{CardHeader}</p>
      <h1 class="text-w privacy-data py-4 md:text-lg lg:text-xl text-base">
        {CardContent}<span class="text-[#F96B29]">{SpanContent}</span
        >{CardContent2}
      </h1>
      <p class="text-w p-content md:text-lg lg:text-xl text-base pb-4">
        {CardContent3}
      </p>
      <slot></slot>
    </div>
  </div>
</div>

<style>
</style>
