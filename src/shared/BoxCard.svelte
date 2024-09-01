<script>
    export let BoxSrc="";
    export let BoxHead="";
    export let BoxBody="";
    export let BoxSrc1="";
    export let BoxHead1="";
    export let BoxBody1="";
</script>

<div class="container my-lg-2">
    <div class="col-md-10 offset-md-1">
      <div class="mx-0 row">
        <div class="col-md-6 mb-3">
          <div class="about_define_box h-[25rem] md:h-[34rem] lg:h-[26rem]"> 
            <div class="image">
              <img src={BoxSrc} class="mx-auto d-block" alt="" />
            </div>
            <div class="title my-3">{BoxHead}</div>
            <div class="body text-green text-xs md:text-base lg:text-lg">{BoxBody}
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
            <div class="about_define_box h-[25rem] md:h-[34rem] lg:h-[26rem]">
              <div class="image">
                <img src={BoxSrc1} class="mx-auto d-block" alt="" />
              </div>
              <div class="title my-3">{BoxHead1}</div>
              <div class="body text-green text-xs md:text-base lg:text-lg">{BoxBody1}
              </div>
            </div>
          </div>
        </div>
    </div>
</div>

<style>

</style>