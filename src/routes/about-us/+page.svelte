<script>
    import About from "../../components/About.svelte";
    export let title = "Square Metres - About Us";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/about-us" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="About us Page" />
    <meta property="og:url" content="https://squaremetres.ng/about-us" />
    
</svelte:head>

<About />
