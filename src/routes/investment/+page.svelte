<script>
    import Investment from "../../components/Investment.svelte";
    export let title = "Square Metres - Investment";
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Investment Page" />
    <meta property="og:url" content="https://squaremetres.ng/investment" />
    <meta property="og:type" content="website" />
</svelte:head>

<Investment />
