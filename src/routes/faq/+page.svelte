<script>
    import Faq from "../../components/Faq.svelte";
    export let title = "Square Metres - Frequently Asked Questions";
</script>

<svelte:head>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Frequently Asked Questions Page" />
    <meta property="og:url" content="https://squaremetres.ng/faq" />
    <meta property="og:type" content="website" />
</svelte:head>

<Faq />