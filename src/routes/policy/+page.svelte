<script>
  import Policy from "../../components/Policy.svelte";
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
    "Square Metres Real Estate Policies | Privacy, Terms, and Conditions";
  export let Description =
    "Read Square Metres' privacy policy, terms, and conditions, ensuring transparency in all real estate transactions and services.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={Description} />
  <link rel="canonical" href="https://squaremetres.ng/policy" />
  <meta name="image" content="https://squaremetres.ng/images/privacy.jpeg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="{Description}" />
  <meta property="og:url" content="https://squaremetres.ng/policy" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/privacy.jpeg" />
</svelte:head>

<Policy />
