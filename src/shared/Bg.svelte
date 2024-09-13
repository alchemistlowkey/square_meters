<script>
  export let headerBG = "";
</script>

<section
  class="bg pt-5"
  style="background-image: linear-gradient(#0000009e, #0d493da2), url('/images/{headerBG}')"
>
  <slot></slot>
</section>

<style>
  .bg {
    background-size: cover;
    background-position: center;
  }
</style>
