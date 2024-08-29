<!-- src/routes/Purchase.svelte -->
<script>
  import { onMount } from "svelte";

  async function trackPurchase(purchaseData) {
    try {
      const response = await fetch("/api/track-purchase", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(purchaseData), // Sending event data
      });

      if (!response.ok) {
        throw new Error("Failed to track purchase");
      }

      console.log("Purchase event tracked successfully");
    } catch (error) {
      console.error("Error tracking purchase:", error);
    }
  }

  // Example purchase data
  const purchaseData = {
    email: "customer@example.com",
    value: 142.52,
    currency: "USD",
  };

  onMount(() => {
    // Call this function when purchase is made
    trackPurchase(purchaseData);
  });
</script>

