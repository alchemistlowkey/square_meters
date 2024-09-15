<script>
  import FitilaSignature from "../../components/FitilaSignature.svelte";

  export let title = "Square Metres - Fitila Signature";
  export const productName = "Fitila Signature";
  export const productPrice = "Affordable";
  export const productDescription =
    "Fitila Signature is a luxurious residential estate located in the heart of Lagos, Nigeria. It is a blend of modern architecture and contemporary designs. The estate is designed to provide a serene and secure environment for residents. The estate features a range of amenities including a swimming pool, gym, and children’s play area. The estate is located close to major business districts, schools, and shopping centers. Fitila Signature is the perfect place to call home.";
  export const productAvailability = "InStock";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="image" content="https://squaremetres.ng/images/fitila_signatures.jpg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={productDescription} />
  <meta property="og:url" content="https://squaremetres.ng/fitila-signature" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/fitila_signatures.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<FitilaSignature />
