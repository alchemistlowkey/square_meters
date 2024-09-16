<script>
    import Contact from "../../components/Contact.svelte";
    export let title = "Square Metres - Contact Us";
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="canonical" href="https://squaremetres.ng/contact-us" />
    <meta property="og:image" content="https://squaremetres.ng/images/address.png" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content="Contact us Page" />
    <meta property="og:url" content="https://squaremetres.ng/contact-us" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://squaremetres.ng/images/address.png" />
</svelte:head>

<Contact />