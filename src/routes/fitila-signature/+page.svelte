<script>
    import FitilaSignature from "../../components/FitilaSignature.svelte";
    export let title = "Square Metres - Fitila Signature";
    export let productName = 'Fitila Signature';
  export let productPrice = 'Affordable';
  export let productDescription = 'Fitila Signature is a luxurious residential estate located in the heart of Lagos, Nigeria. It is a blend of modern architecture and contemporary designs. The estate is designed to provide a serene and secure environment for residents. The estate features a range of amenities including a swimming pool, gym, and children’s play area. The estate is located close to major business districts, schools, and shopping centers. Fitila Signature is the perfect place to call home.';
  export let productAvailability = 'InStock';
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/fitila-signature" />
    <meta name="description" content="Fitila Signature Page" />
    <meta name="keywords" content="Fitila Signature, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{productDescription}" />
    <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": productName,
          "description": productDescription,
          "offers": {
            "@type": "Offer",
            "price": productPrice,
            "priceCurrency": "USD",
            "availability": `https://schema.org/${productAvailability}`
          }
        })}
      </script>
</svelte:head>

<FitilaSignature />