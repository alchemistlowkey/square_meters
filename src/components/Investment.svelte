<script>
  import Bg from "../shared/Bg.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import Button from "../shared/Button.svelte";
  import Offer from "../shared/Offer.svelte";
</script>
<Bg headerBG="investment-page-bg.jpeg">
  <PageHead
    CardContent="Invest in "
    SpanContent="Fitila Signatures "
    CardContent2="through short-term real estate debt that yield high returns."
  >
    <Button btnDetails={{ text: "Reserve a Slot", link: "/reserve" }} />
  </PageHead>
</Bg>

<Offer />

<style>
</style>