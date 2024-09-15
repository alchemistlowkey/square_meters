<script>
    import Career from "../../components/Career.svelte";
    export let title = "Square Metres - Career";
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Career Page" />
    <meta property="og:url" content="https://squaremetres.ng/career" />
    <meta property="og:type" content="website" />
</svelte:head>

<Career />