<script>
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

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

  injectSpeedInsights();

  inject({ mode: dev ? "development" : "production" });

  let description =
    "Square Metres Construction Limited is more than just a real estate development company, we are passionate about driving a wholesome experience through real estate and investment solutions. Our Journey began with a simple yet profound goal which is to provide investors with an experience that truly reflects the potential of their real estate investment";
  let keywords =
    "Real estate investment Nigeria, Land buy-back scheme Lagos, Property investment Lagos, Real estate development Nigeria, Affordable land in Lagos, Property ROI Nigeria, Real estate advisory services, Investment in land Lagos, Real estate market trends Nigeria, Land for sale in Victoria Island, Real estate solutions Lagos, Property acquisition services, Land investment in Nigeria, Buy property Lagos, Investment property Lagos, Land ROI Nigeria, Real estate opportunities Lagos, Land development schemes, Secure land investment, Property investment advisory Lagos";

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
  });
</script>

<svelte:head>
  <meta name="keywords" content={keywords} />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Square Metres" />
  <meta property="twitter:url" content="https://x.com/squaremetresng" />
  <meta name="twitter:site" content="@squaremetresng" />
  <meta name="twitter:creator" content="@squaremetresng" />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content="Square Metres" />
  <meta name="twitter:label2" content="Filed under" />
  <meta name="twitter:data2" content="Real Estate" />
  <meta name="twitter:label3" content="Filed under" />
  <meta name="twitter:data3" content="Construction" />
  <meta name="twitter:label4" content="Filed under" />
  <meta name="twitter:data4" content="Property" />
  <meta name="twitter:label5" content="Filed under" />
  <meta name="twitter:data5" content="Investment" />
  <meta name="twitter:label6" content="Filed under" />
  <meta name="twitter:data6" content="Land" />
  <meta name="twitter:label7" content="Filed under" />
  <meta name="twitter:data7" content="House" />
  <meta name="twitter:label8" content="Filed under" />
  <meta name="twitter:data8" content="Home" />
  <meta name="twitter:label9" content="Filed under" />
  <meta name="twitter:data9" content="Apartment" />
</svelte:head>

<noscript>
  <img
    height="1"
    width="1"
    style="display:none"
    alt="facebook pixel"
    src="https://www.facebook.com/tr?id=2155515458142973&ev=PageView&noscript=1"
  />
</noscript>

<NavBar />

<!-- <Nav /> -->

<slot></slot>

<WaIcon />

<Footers />

<style>
</style>
