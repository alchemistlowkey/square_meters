<script>
    export let btnDetails = {
        text: "",
        link: "",
        target: "_blank",
    };
</script>

<button class="btn privacy-btn text-w">
  <a href="{btnDetails.link}" target="{btnDetails.target}">{btnDetails.text}</a>
</button>

<style>
  .privacy-btn:hover {
    background-color: #f96b29;
  }
</style>
