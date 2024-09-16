<script>
    import Policy from '../../components/Policy.svelte';
    export let title = 'Square Metres - Policy';
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/policy" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Policy Page" />
    <meta property="og:url" content="https://squaremetres.ng/policy" />
    <meta property="og:type" content="website" />
</svelte:head>

<Policy />