<script>
  import Product from "../../components/Product.svelte";
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

  export let title = "Square Metres Real Estate | Premier Properties in Lagos";
  export let Description =
    "Explore Square Metres' premier real estate developments in Lagos, offering luxury properties and high-value investment opportunities.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={Description} />
  <link rel="canonical" href="https://squaremetres.ng/product" />
  <meta name="image" content="https://squaremetres.ng/images/productland.jpeg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="{Description}" />
  <meta property="og:url" content="https://squaremetres.ng/product" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/productland.jpeg" />
</svelte:head>

<Product />
