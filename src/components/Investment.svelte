<script>
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
</script>

<section class="investment-bg">
  <PageHead
    CardContent="Invest in "
    SpanContent="Fitila Signatures "
    CardContent2="through short-term real estate debt that yield high returns."
  >
    <Button btnDetails={{ text: "Reserve a Slot", link: "/reserve" }} />
  </PageHead>
</section>

<style>
    .investment-bg {
        background-image: linear-gradient(#0000009e, #001410),
      url("../lib/img/investment-page-bg.jpeg");
    background-size: cover;
    background-position: center;
    }
</style>