<script>
  import "../bg.css";
  import "../custom.css";
  import "../app.css";
  import "../global.css";
  import "../index.css";
  import WaIcon from "../components/WaIcon.svelte";
  import Footers from "../components/Footers.svelte";
  import NavBar from "../components/NavBar.svelte";
  import Nav from "../components/Nav.svelte";

  import { onMount } from "svelte";

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
  @import url('https://fonts.googleapis.com/css2?family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=MuseoModerno:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800&display=swap');
</style>
