<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
</script>

<Bg headerBG="product.jpeg">
  <PageHead
  CardHeader="Our Products"
    CardContent="You are a step closer to making a great decision today, cheers."
  >
    <Button btnDetails="See our projects"
    btnlink="#projects"
    ></Button>
  </PageHead>
</Bg>

<section id="projects">
  <div class="container mt-4">
  <div class="w-100">
    <div class="row mx-0">
      <div class="col-md-6 mb-sm-1">
        <div class="prod-land2 justify-content-start ps-5">
          <p class="fw-normal text-xs">Epe, Lagos state</p>
          <h5 class="text-4xl">
            Fitila Signatures
          </h5>
        </div>
      </div>
      <div class="col-md-6 mb-sm-1">
        <div class="prod-land justify-content-start ps-5">
          <p class="fw-normal text-xs">Asaba, Delta State</p>
          <h5 class="text-4xl">Dunika Land</h5>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

<style>
</style>
