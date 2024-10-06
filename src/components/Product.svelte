<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Img from "../shared/Img.svelte";
</script>

<Bg headerBG="product.jpeg">
  <PageHead
    CardHeader="Our Products"
    CardContent="You are a step closer to making a great decision today, cheers."
  >
    <Button btnDetails="See our projects" btnlink="#projects"></Button>
  </PageHead>
</Bg>

<section id="projects">
  <div class="container">
    <div class="row mx-0">
      <div>
        <h1 class="text-4xl mt-5 text-center">
          Our List of Products
        </h1>
      </div>
    </div>
  </div>
  <Img
    ProductImages={[
      {
        src: "fitila_signatures.jpg",
        text: "Fitila Signature",
        span: "Epe, Lagos state",
        href: "/fitila-signature",
      },
      { src: "land_2.jpg", text: "Dunika Land", span: "Asaba, Delta State" },
    ]}
  />
</section>

<style>
</style>
