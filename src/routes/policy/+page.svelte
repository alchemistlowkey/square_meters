<script>
  import Policy from "../../components/Policy.svelte";
  import { onMount } from "svelte";
  
  export let title = "Square Metres - Policy";
  
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
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://squaremetres.ng/policy" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Policy Page" />
  <meta property="og:url" content="https://squaremetres.ng/policy" />
  <meta property="og:type" content="website" />
</svelte:head>

<Policy />
