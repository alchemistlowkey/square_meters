<script>
    import About from "../../components/About.svelte";
    export let title = "Square Metres - About Us";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/about-us" />
    <meta name="description" content="About us Page" />
</svelte:head>

<About />
