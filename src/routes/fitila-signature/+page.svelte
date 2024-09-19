<script>
  import FitilaSignature from "../../components/FitilaSignature.svelte";
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

  export let title = "Square Metres - Fitila Signature";
  export const productName = "Fitila Signature";
  export const productPrice = "Affordable";
  export const productDescription =
    "Fitila Signature is a luxurious residential estate located in the heart of Lagos, Nigeria. It is a blend of modern architecture and contemporary designs. The estate is designed to provide a serene and secure environment for residents. The estate features a range of amenities including a swimming pool, gym, and children’s play area. The estate is located close to major business districts, schools, and shopping centers. Fitila Signature is the perfect place to call home.";
  export const productAvailability = "InStock";
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="canonical" href="https://squaremetres.ng/fitila-signature" />
  <meta
    name="image"
    content="https://squaremetres.ng/images/fitila_signatures.jpg"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={productDescription} />
  <meta property="og:url" content="https://squaremetres.ng/fitila-signature" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://squaremetres.ng/images/fitila_signatures.jpg"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<FitilaSignature />
