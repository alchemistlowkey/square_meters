<script>
    import Faq from "../../components/Faq.svelte";
    export let title = "Square Metres - Frequently Asked Questions";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/faq" />
    <meta name="description" content="Frequently Asked Questions Page" />
</svelte:head>

<Faq />