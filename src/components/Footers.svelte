<script>
    import FooterTop from "./FooterTop.svelte";
    import FooterBottom from "./FooterBottom.svelte";
</script>

<section class="footer-bg">
    <FooterTop />

    <FooterBottom />
</section>

<style>
    .footer-bg {
		background-image: linear-gradient(to bottom, #fafafadc, #FAFAFA), url('../lib/img/sqmfooter-bg.jpeg');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%; /* Full width */
	}    
</style>
