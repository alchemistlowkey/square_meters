<script>
    import Product from "../../components/Product.svelte";
    export let title = "Square Metres - Product";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/product" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Product Page" />
    <meta property="og:url" content="https://squaremetres.ng/product" />
    <meta property="og:type" content="website" />
</svelte:head>

<Product />