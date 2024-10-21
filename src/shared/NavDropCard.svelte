<script>
  export let dropheader = "";
  export let droptext = "";
  export let dropimg = "";
  export let droplink = "";
  export let dropimgalt = "";
</script>

<a href={droplink} class="block px-2 py-2 hover:bg-gray-100">
  <div class="mx-0 row">
    <div class="col-3">
      <img class="" src={dropimg} alt={dropimgalt} loading="lazy" />
    </div>
    <div class="col-9">
      <span class="text-md text-nowrap text-[#0D493D]">{dropheader}</span>
      <br />
      <span class="text-xs text-nowrap text-[#13705D]">{droptext}</span>
    </div>
  </div>
</a>

<style>
</style>
