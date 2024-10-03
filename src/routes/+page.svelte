<script>
  import exp from "constants";
  import Home from "../components/Home.svelte";
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

  export let title = "Square Metres - Affordable Land Solutions";
  export let HomeDescription =
    "Square Metres is a real estate company that provides affordable land solutions in Lagos. We offer land for sale in Lagos, and other parts of Nigeria.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={HomeDescription} />
  <link rel="canonical" href="https://squaremetres.ng" />
  <meta name="image" content="https://squaremetres.ng/favicon.png" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={HomeDescription} />
  <meta property="og:url" content="https://squaremetres.ng" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/favicon.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://x.com/squaremetresng" />
  <meta property="twitter:title" content="Square Metres" />
  <meta property="twitter:description" content={HomeDescription} />
  <meta
    property="twitter:image"
    content="https://squaremetres.ng/favicon.png"
  />
  <meta name="twitter:site" content="@squaremetresng" />
  <meta name="twitter:creator" content="@squaremetresng" />  
</svelte:head>

<Home />
