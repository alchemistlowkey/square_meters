<script>
  export let headerBG = "";
</script>

<section
  class="bg"
  style="background-image: linear-gradient(#0000009e, #001410), url('/images/{headerBG}')"
>
  <slot></slot>
</section>

<style>
  .bg {
    background-size: cover;
    background-position: center;
  }
</style>
