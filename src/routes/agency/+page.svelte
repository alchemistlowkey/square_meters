<script>
  export let gtagScript;

  import Agency from "../../components/Agency.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    if (gtagScript) {
      const script = document.createElement("script");
      script.src = gtagScript;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-7REW6CW0T8");
    }
  });

  export let title = "Square Metres - Agency";
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="description"
    content="Join Square Metres agency to prioritize your clients, close more deals, and enhance your earnings. Apply today to become a part of our real estate network."
  />
  <meta
    name="keywords"
    content="real estate agency, Square Metres, property deals, real estate agents, real estate consultancy"
  />
  <link rel="canonical" href="https://squaremetres.ng/agency" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Agency Page" />
  <meta property="og:url" content="https://squaremetres.ng/agency" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta
    name="twitter:description"
    content="Join Square Metres agency to prioritize your clients, close more deals, and enhance your earnings."
  />
  <meta name="twitter:url" content="https://squaremetres.ng/agency" />
  <meta
    name="twitter:image"
    content="https://squaremetres.ng/images/logo.png"
  />
</svelte:head>

<Agency />
