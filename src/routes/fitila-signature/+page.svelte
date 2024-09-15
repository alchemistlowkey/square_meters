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
  <link rel="canonical" href="https://squaremetres.ng/fitila-signature" />
  <meta name="description" content="Fitila Signature Page" />
  <meta
    name="keywords"
    content="Fitila Signature, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction"
  />
  <meta name="image" content="https://squaremetres.ng/images/fitila_signatures.jpg" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={productDescription} />
  <meta property="og:url" content="https://squaremetres.ng/fitila-signature" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://squaremetres.ng/images/fitila_signatures.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={productDescription} />
  <meta name="twitter:image" content="https://squaremetres.ng/images/fitila_signatures.jpg" />
  <meta name="twitter:image:width" content="1200" />
  <meta name="twitter:image:height" content="630" />
  <meta name="twitter:site" content="@squaremetresng" />
  <meta name="twitter:creator" content="@squaremetresng" />
  <meta name="twitter:domain" content="https://squaremetres.ng" />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content="Square Metres" />
  <meta name="twitter:label2" content="Filed under" />
  <meta name="twitter:data2" content="Real Estate" />
  <meta name="twitter:label3" content="Filed under" />
  <meta name="twitter:data3" content="Construction" />
  <meta name="twitter:label4" content="Filed under" />
  <meta name="twitter:data4" content="Property" />
  <meta name="twitter:label5" content="Filed under" />
  <meta name="twitter:data5" content="Investment" />
  <meta name="twitter:label6" content="Filed under" />
  <meta name="twitter:data6" content="Land" />
  <meta name="twitter:label7" content="Filed under" />
  <meta name="twitter:data7" content="House" />
  <meta name="twitter:label8" content="Filed under" />
  <meta name="twitter:data8" content="Home" />
  <meta name="twitter:label9" content="Filed under" />
  <meta name="twitter:data9" content="Apartment" />
  <meta name="twitter:label12" content="Filed under" />
  <meta name="twitter:data12" content="Square Metres Nigeria" />
  <meta name="twitter:label13" content="Filed under" />
  <meta name="twitter:data13" content="Square Metres NG" />
  <meta name="twitter:label18" content="Filed under" />
  <meta name="twitter:data18" content="Square Metres Construction" />
</svelte:head>

<FitilaSignature />
