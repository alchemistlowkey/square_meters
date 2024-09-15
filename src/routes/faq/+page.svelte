<script>
    import Faq from "../../components/Faq.svelte";
    export let title = "Square Metres - Frequently Asked Questions";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/faq" />
    <meta name="description" content="Frequently Asked Questions Page" />
    <meta
        name="keywords"
        content="Frequently Asked Questions, Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Frequently Asked Questions Page" />
    <meta property="og:url" content="https://squaremetres.ng/faq" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content="Frequently Asked Questions Page" />
    <meta name="twitter:site" content="@squaremetresng" />
    <meta name="twitter:creator" content="@squaremetresng" />
    <meta name="twitter:domain" content="https://squaremetres.ng" />
    <meta name="twitter:label1" content="Written by" />
    <meta name="twitter:data1" content="Square Metres" />
</svelte:head>

<Faq />