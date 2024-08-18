<script>
  export let CardHeader = "";
  export let CardContent = "";
  export let CardContent2 = "";
  export let CardContent3 = "";
  export let SpanContent = "";
</script>

<div class="container">
  <div class="row mx-0 py-16">
    <div class="col-12 col-md-10 py-10 mx-auto text-center">
      <p class="career text-w pb-3">{CardHeader}</p>
      <h1 class="text-w privacy-data py-4">
        {CardContent}<span class="text-[#F96B29]">{SpanContent}</span
        >{CardContent2}
      </h1>
      <p class="text-w p-content fs-md-6 pb-4">
        {CardContent3}
      </p>
      <slot></slot>
    </div>
  </div>
</div>
