<script>
    import Investment from "../../components/Investment.svelte";
    export let title = "Square Metres - Investment";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/investment" />
    <meta name="description" content="Investment Page" />
    <meta
        name="keywords"
        content="Investment, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Investment Page" />
    <meta property="og:url" content="https://squaremetres.ng/investment" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Investment Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
</svelte:head>

<Investment />
