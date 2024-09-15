<script>
    import About from "../../components/About.svelte";
    export let title = "Square Metres - About Us";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/about-us" />
    <meta name="description" content="About us Page" />
    <meta
        name="keywords"
        content="About us, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="About us Page" />
    <meta property="og:url" content="https://squaremetres.ng/about-us" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="About us Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
</svelte:head>

<About />
