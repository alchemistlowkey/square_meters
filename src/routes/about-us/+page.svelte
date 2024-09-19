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

  export let title = "Square Metres - About Us";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://squaremetres.ng/about-us" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="About us Page" />
  <meta property="og:url" content="https://squaremetres.ng/about-us" />
</svelte:head>

<About />
