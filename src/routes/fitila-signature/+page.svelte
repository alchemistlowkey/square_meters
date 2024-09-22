<script>
  import FitilaSignature from "../../components/FitilaSignature.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    // Google Tag (gtag.js)
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-7REW6CW0T8";
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-7REW6CW0T8");
  });

  export let title =
    "Fitila Signature Epe | Prime Real Estate Investment in Lagos by Square Metres";
  export const productName = "Fitila Signature Epe";
  export const productPrice = "Affordable";
  export const productDescription =
    "Explore Fitila Signature Epe by Square Metres, a premier real estate investment offering luxury living and high ROI in Lagos.";
  export const productAvailability = "InStock";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={productDescription} />
  <link rel="canonical" href="https://squaremetres.ng/fitila-signature" />
  <meta
    name="image"
    content="https://squaremetres.ng/images/fitila_signatures.jpg"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={productDescription} />
  <meta property="og:url" content="https://squaremetres.ng/fitila-signature" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://squaremetres.ng/images/fitila_signatures.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<FitilaSignature />
