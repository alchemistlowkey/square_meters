<script>
    import PageHead from "../shared/PageHead.svelte";
    import Button from "../shared/Button.svelte";
  </script>
  
  <section class="agency-bg">
    <PageHead
      CardContent="The best returns come from
investing in yourself"
      CardContent3="Join today to prioritize your clients, close more deals like never before
and enhance your earnings."
    >
      <Button btnDetails={{ text: "Apply now to Join", link: "#agent" }}
      ></Button>
    </PageHead>
  
  </section>

  <style>
    .agency-bg {
    background-image: linear-gradient(#0000009e, #001410),
      url("../lib/img/privacy.jpeg");
    background-size: cover;
    background-position: center center;
  }
  </style>