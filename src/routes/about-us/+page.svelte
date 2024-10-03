<script>
  import About from "../../components/About.svelte";
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
    "About Square Metres | Leading Real Estate Developer in Lagos";
  export let Description =
    "Discover Square Metres, a leading real estate developer in Lagos, offering prime properties and investments for high returns.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={Description} />
  <link rel="canonical" href="https://squaremetres.ng/about-us" />
  <meta name="image" content="https://squaremetres.ng/images/logo_desktop.png" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="{Description}" />
  <meta property="og:url" content="https://squaremetres.ng/about-us" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/logo_desktop.png" />
</svelte:head>

<About />
