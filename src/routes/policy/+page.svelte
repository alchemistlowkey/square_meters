<script>
    import Policy from '../../components/Policy.svelte';
    export let title = 'Square Metres - Policy';
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/policy" />
    <meta name="description" content="Policy Page" />
    <meta
        name="keywords"
        content="Policy, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Policy Page" />
    <meta property="og:url" content="https://squaremetres.ng/policy" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Policy Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
</svelte:head>

<Policy />