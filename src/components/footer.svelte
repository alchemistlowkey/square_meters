<script></script>


text/x-generic footer.blade.php ( HTML document, ASCII text )
<style>
    .product {
        position: relative;
        font-size: 17.54px;
        font-family: var(--font-poppins);
        color: #0d493d;
        text-align: left;
        font-weight: 600;
    }

    .squaremetres-all-rights-reser-parent {
        position: relative;
        /* background-image: linear-gradient(to bottom, #233452d1, #233452), url(./holigan-stadium.jpeg); */
        background-image: linear-gradient(to bottom, #fafafadc, #FAFAFA), url("{{ asset('icon/Frame.jpeg') }}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        text-align: left;
        font-size: 17.54px;
        color: var(--color-darkslategray);
        font-family: var(--font-poppins);
    }

    .product-item a {
        color: #0D493D !important;

        font-family: Poppins;
        font-size: 17.537px;
        font-style: normal;
        text-decoration: none;
        font-weight: 400;
        line-height: normal;
        padding-bottom: 15px;
    }

    li.list-unstyled.product-item {
        padding-bottom: 18px;
    }

    @media(max-width:768px) {
        .footer-logo {
            max-width: 200px;
        }
        .footer-social{
            display: flex;
    justify-content: space-around;   

        }
    }
</style>
<div class="mt-auto container-fluid squaremetres-all-rights-reser-parent ">
    <div class="container pt-5 px-0 px-lg-0 ">
        <div class="row mx-0">
            <div class="col-xl-6 mb-lg-0 mb-5">
                <img src="{{ asset('square_d.png') }}" class="footer-logo">
                <br>
                <span class="normal-text">Forget everything you knew about Real Estate.</span>
            </div>


            <div class="col-xl-6">
                <div class="row mx-0">
                    <div class="col-xl-4 col-6">
                        <h3 class="product">Product</h3>
                        <ul class="list-unstyled mt-3">
                            <li class="list-unstyled product-item"><a href="">Residential</a></li>
                            <li class="list-unstyled product-item"><a href="">Commercial</a></li>
                            <li class="list-unstyled product-item"><a href="">Investment</a></li>
                        </ul>

                    </div>
                    <div class="col-xl-4 col-6">
                        <h3 class="product">Company</h3>
                        <ul class="list-unstyled mt-3">
                            <li class="list-unstyled product-item"><a href="">About Us</a></li>
                            <li class="list-unstyled product-item"><a href="">Blog</a></li>
                            <li class="list-unstyled product-item"><a href="">Contact Us</a></li>
                            <li class="list-unstyled product-item"><a href="">Faq</a></li>
                        </ul>

                    </div>
                    <div class="col-xl-4">
                        <h3 class="product">Socials</h3>
                        <ul class="list-unstyled footer-social mt-3">
                            <li class="list-unstyled product-item"><a href=""><img
                                        src="{{ asset('icon/linkedin.svg') }}"></a></li>
                            <li class="list-unstyled product-item"><a href=""><img
                                        src="{{ asset('icon/twitter.svg') }}"></a></li>
                            <li class="list-unstyled product-item"><a href=""><img
                                        src="{{ asset('icon/facebook.svg') }}"></a></li>

                            <li class="list-unstyled product-item"><a href=""><img
                                        src="{{ asset('icon/instagram.svg') }}"></a></li>
                            {{-- <li class="list-unstyled product-item"><a href=""><img src="{{ asset('icon/twitter.svg') }}"></a></li> --}}
                            <li class="list-unstyled product-item"><a href=""><img
                                        src="{{ asset('icon/youtube.svg') }}"></a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 px-0 pt-3 px-lg-0 px-0 mt-4 pb-3 border-top">
            <div class="row mx-0">
                <div class="col-xl-6">
                    <span class="normal-text fw-bold">
                        @ {{ date('Y') }} Squaremetres. All rights reserved
                    </span>
                </div>
                <div class="col-xl-6 d-lg-block d-none">
                    <div class="row mx-0">
                        <div class="col-xl-4">
                            <a class="normal-text text-decoration-none fw-bold">
                                Terms of Service
                            </a>
                        </div>

                        <div class="col-xl-4">
                            <a class="normal-text text-decoration-none fw-bold">
                                Privacy Policy
                            </a>
                        </div>
                        <div class="col-xl-4">
                            <a class="normal-text text-decoration-none fw-bold">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>

<style></style>