<script>
    import Contact from "../../components/Contact.svelte";
    export let title = "Square Metres - Contact Us";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/contact-us" />
    <meta name="description" content="Contact us Page" />
    <meta
        name="keywords"
        content="Contact us, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:image" content="https://squaremetres.ng/images/address.png" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Contact us Page" />
    <meta property="og:url" content="https://squaremetres.ng/contact-us" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://squaremetres.ng/images/address.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Contact us Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
    <meta name="twitter:image" content="https://squaremetres.ng/images/address.png" />
</svelte:head>

<Contact />