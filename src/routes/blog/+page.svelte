<script>
    import Blog from "../../components/Blog.svelte";

    import { onMount } from "svelte";
    
      onMount(() => {
        // Google Tag (gtag.js)
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-7REW6CW0T8";
        script.async = true;
        document.head.appendChild(script);
    
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-7REW6CW0T8");
      });
    
      export let title =
        "Real Estate Insights & Trends | Square Metres Blog";
      export const blogDescription =
        "Stay updated with the latest real estate trends, insights, and investment tips from the Square Metres blog. Expert advice on Lagos property market.";
</script>

<Blog />



<svelte:head>
  <title>{title}</title>
  <meta name="description" content={blogDescription} />
  <link rel="canonical" href="https://squaremetres.ng/blog" />
  <meta
    name="image"
    content="https://squaremetres.ng/images/blog.jpeg"
  />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={blogDescription} />
  <meta property="og:url" content="https://squaremetres.ng/blog" />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://squaremetres.ng/images/blog.jpeg"
  />
</svelte:head>
