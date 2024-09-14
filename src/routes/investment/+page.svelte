<script>
    import Investment from "../../components/Investment.svelte";
    export let title = "Square Metres - Investment";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/investment" />
    <meta name="description" content="Investment Page" />
</svelte:head>

<Investment />
