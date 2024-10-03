<script>
  import Faq from "../../components/Faq.svelte";
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
    "Square Metres FAQ | Answers to Your Real Estate Questions";
  export let FaqDescription =
    "Find answers to common real estate questions with Square Metres. Learn more about our services, investments, and properties.";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={FaqDescription} />
  <link rel="canonical" href="https://squaremetres.ng/faq" />
  <meta name="image" content="https://squaremetres.ng/images/faq.jpeg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="{FaqDescription}" />
  <meta property="og:url" content="https://squaremetres.ng/faq" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/faq.jpeg" />
</svelte:head>

<Faq />
