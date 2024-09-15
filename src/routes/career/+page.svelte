<script>
    import Career from "../../components/Career.svelte";
    export let title = "Square Metres - Career";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/career" />
    <meta name="description" content="Career Page" />
    <meta
        name="keywords"
        content="Career, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Career Page" />
    <meta property="og:url" content="https://squaremetres.ng/career" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Career Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
</svelte:head>

<Career />