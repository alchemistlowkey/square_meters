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
      <h1 class="career text-w pb-3">{CardHeader}</h1>
      <h2 class="text-w privacy-data pt-4 md:text-3xl xl:text-5xl lg:text-4xl text-2xl tracking-normal leading-10">
        {CardContent}<span class="text-[#F96B29]">{SpanContent}</span
        >{CardContent2}
      </h2>
      <p class="text-w p-content md:text-lg lg:text-xl text-base pb-4 pt-3">
        {CardContent3}
      </p>
      <slot></slot>
    </div>
  </div>
</div>

<style>
</style>
