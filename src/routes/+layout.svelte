<script context="module">
  export const load = async () => {
    return {
      title: "Square Metres",
      description:
        "Square Metres Construction Limited is more than just a real estate development company, we are passionate about driving a wholesome experience through real estate and investment solutions. Our Journey began with a simple yet profound goal which is to provide investors with an experience that truly reflects the potential of their real estate investment",
      keywords:
        "Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction",
    };
  };
</script>

<script>
  import { onMount } from "svelte";
  import "../bg.css";
  import "../custom.css";
  import "../app.css";
  import "../global.css";
  import "../index.css";
  import WaIcon from "../components/WaIcon.svelte";
  import Footers from "../components/Footers.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Nav from "../components/Nav.svelte";

  let title = "Square Metres";
  let description =
    "Square Metres Construction Limited is more than just a real estate development company, we are passionate about driving a wholesome experience through real estate and investment solutions. Our Journey began with a simple yet profound goal which is to provide investors with an experience that truly reflects the potential of their real estate investment";
  let keywords =
    "Real Estate, Investment, Construction, Property, Land, House, Home, Apartment, Square Metres, Square Metres Construction Limited, Square Metres Construction, Square Metres Nigeria, Square Metres NG, Square Metres Limited, Square Metres NG Limited, Square Metres Nigeria Limited, Square Metres Construction Nigeria, Square Metres Construction";

  onMount(() => {
    // Meta Pixel Code
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );

    fbq("init", "2155515458142973");
    fbq("track", "PageView");

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

    document.title = "Square Metres";
    document.head.innerHTML += `
      <meta name="title" content="Square metres">
      <meta name="description" content="Square Metres Construction Limited is more than just a real estate development company, we are passionate about driving a wholesome experience through real estate and investment solutions. Our Journey began with a simple yet profound goal which is to provide investors with an experience that truly reflects the potential of their real estate investment">

      <link rel="canonical" href="https://squaremetres.ng/">
      <!-- Add more meta tags as needed -->
    `;
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <link rel="canonical" href="https://squaremetres.ng" />
  <meta name="image" content="https://squaremetres.ng/favicon.png" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Square Metres" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://squaremetres.ng" />
  <meta property="og:image" content="https://squaremetres.ng/favicon.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://x.com/squaremetresng" />
  <meta property="twitter:title" content="Square Metres" />
  <meta property="twitter:description" content={description} />
  <meta
    property="twitter:image"
    content="https://squaremetres.ng/favicon.png"
  />
</svelte:head>

<noscript>
  <img
    height="1"
    width="1"
    style="display:none"
    alt=""
    src="https://www.facebook.com/tr?id=2155515458142973&ev=PageView&noscript=1"
  />
</noscript>

<NavBar />

<!-- <Nav /> -->

<slot></slot>

<WaIcon />

<Footers />

<style>
  @import url("https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800&display=swap");
</style>
