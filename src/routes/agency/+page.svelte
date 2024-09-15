<script>
    import Agency from "../../components/Agency.svelte";
    export let title = "Square Metres - Agency";
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Agency Page" />
    <meta property="og:url" content="https://squaremetres.ng/agency" />
</svelte:head>

<Agency />