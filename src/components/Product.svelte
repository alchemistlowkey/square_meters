<script>
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
</script>

<section class="product-bg">
  <PageHead
  CardHeader="Our Products"
    CardContent="You are a step closer to making a great decision today, cheers."
  >
    <Button btnDetails={{ text: "See our projects", link: "#projects" }}></Button>
  </PageHead>
</section>

<style>
  .product-bg {
    background-image: linear-gradient(#0000009e, #001410),
      url("../lib/img/product.jpeg");
    background-size: cover;
    background-position: center center;
  }
</style>
