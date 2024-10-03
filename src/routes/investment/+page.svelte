<script>
  import Investment from "../../components/Investment.svelte";
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
    "Real Estate Investments in Lagos | High ROI with Square Metres";
  export let Description =
    "Maximize returns with real estate investments in Lagos through Square Metres. High ROI opportunities in prime locations.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={Description} />
  <link rel="canonical" href="https://squaremetres.ng/investment" />
  <meta name="image" content="https://squaremetres.ng/images/invest.jpeg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="{Description}" />
  <meta property="og:url" content="https://squaremetres.ng/investment" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/invest.jpeg" />
</svelte:head>

<Investment />
