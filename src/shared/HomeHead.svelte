<script>
    export let CardHeader = "";
    export let CardContent = "";
    export let CardContent2 = "";
    export let CardContent3 = "";
    export let CardContent4 = "";
    export let SpanContent = "";
  </script>
  
  <div class="container">
    <div class="row mx-0 pt-56 pb-20">
      <div class="col-12 col-md-10 offset-md-1 mx-auto text-center md:text-lg lg:text-xl text-base">
        <p class="career text-w pb-3">{CardHeader}</p>
      </div>
      <div class="col-12 col-md-10 offset-md-1 text-md-nowrap px-0 mx-auto py-3 text-[#F6FFFD] text-center fw-semibold md:text-2xl xl:text-4xl lg:text-3xl text-xl tracking-normal leading-5">
          {CardContent}<span class="text-[#F96B29]">{SpanContent}</span
          >{CardContent2}
      </div>
      <div class="col-12 mx-auto px-0 text-[#F6FFFD] text-nowrap fw-light text-center text-[clamp(8px,2.5vw,20px)] pb-4">
          {CardContent3} <br> {CardContent4}
        <slot></slot>
      </div>
    </div>
  </div>
  
  <style>
  </style>
  