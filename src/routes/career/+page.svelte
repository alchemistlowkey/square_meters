<script>
  import Career from "../../components/Career.svelte";
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

  export let title = "Square Metres - Career";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://squaremetres.ng/career" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Career Page" />
  <meta property="og:url" content="https://squaremetres.ng/career" />
  <meta property="og:type" content="website" />
</svelte:head>

<Career />
