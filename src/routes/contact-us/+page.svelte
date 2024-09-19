<script>
  import Contact from "../../components/Contact.svelte";
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

  export let title = "Square Metres - Contact Us";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://squaremetres.ng/contact-us" />
  <meta
    property="og:image"
    content="https://squaremetres.ng/images/address.png"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content="Contact us Page" />
  <meta property="og:url" content="https://squaremetres.ng/contact-us" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://squaremetres.ng/images/address.png"
  />
</svelte:head>

<Contact />
