<div class="container-fluid nopaddingsmall">
  <div class="container nopaddingsmall">
    <div class="row mx-0">
      <div class="col-12 px-0 mt-lg-5 position-relative mt-3">
        <h1 class="crok text-center">::/ Our Blog</h1>
        <hr />
      </div>
    </div>
  </div>
  <div class="container pt-lg-5 pt-3 mt-lg-0 mt-2 nopaddingsmall">
    <p>&nbsp;</p>

    <p>&nbsp;</p>

    <div class="col-lg-12 nopaddingsmall">
      <div class="mx-0 row">
        <!--Post-2-->
        @foreach ($blog as $k => $v)

        <div class="col-xl-4 col-lg-6 nopaddingsmall col-md-6 masonry-item">
          <div class="post-card">
            <div class="post-card-image">
              <a href="blog.details', ['id' => $v->id, 'title' => $v->title]">
                <img src="storage/' . $v->image" alt="" />
              </a>
            </div>
            <div class="post-card-content">
              <h5 class="entry-title">
                <!-- svelte-ignore a11y-missing-content -->
                <a
                  href="blog.details', ['id' => $v->id, 'title' => $v->title]"
                  class="text-black text-decoration-none font-weight-bold"
                ></a>
              </h5>

              <div class="post-exerpt text-muted">
                @if (strlen($v->summary) > 100)
                <p></p>
                @else
                <p></p>
                @endif
              </div>

              <ul class="entry-meta list-inline list-style-none">
                <li class="post-date text-danger"></li>
              </ul>
            </div>
          </div>
        </div>
        @endforeach
      </div>
      <p>&nbsp;</p>
    </div>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800;900&display=swap");

  @media (min-width: 768px) {
    .navbar-light .navbar-nav .nav-link {
      padding: var(--padding-xs) var(--padding-5xl);
    }

    .welcome-page {
      height: 100vh;
    }

    .listing-img {
      height: 300px;
    }
  }

  @media (max-width: 767px) {
    .welcome-page {
      height: 100vh;
    }

    .listing-img {
      height: 250px;
    }

    .group-inner {
      height: 117px;
    }

    .residential {
      font-size: 22px;
    }

    .nopaddingsmall {
      padding: 0px !important;
    }

    .forget-everything-you-container {
      font-size: 34.91px;
      line-height: 44.68px;
    }
  }

  .rectangle-container {
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .residential {
    position: absolute;
    bottom: 7px;
    left: 15px;
  }

  .storeBox {
    height: 65px;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: #ff7a00;
    border: 1px solid #ff7a00;
    display: flex;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    padding: 17vh;
    text-decoration: none;
    border-radius: 0px;
    color: var(--color-white);
    font-family: var(--font-poppins);
    margin-bottom: 15px;
    flex-direction: column;
  }

  body {
    background: white !important;
  }

  .svg-features {
    width: 25px;
  }

  /* Add your CSS styles for the gallery and overlay here */
  .gallery-container {
    display: flex;
    flex-wrap: wrap;
  }

  .gallery-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
    margin: 5px;
  }

  .overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;

    text-align: center;
  }

  @media (max-width: 600px) {
    .overlay {
      padding-top: 50%;
    }
  }

  .overlay-image {
    max-width: 90%;
    max-height: 90%;
    margin: 20px auto;
    display: block;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 50px;
    color: white;
    cursor: pointer;
  }

  .prev-button,
  .next-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .prev-button {
    left: 10px;
  }

  .next-button {
    right: 10px;
  }

  .at-square-meters {
    margin: 0;
  }

  .our-mission-and {
    margin: 0;
    font-size: 23px;
  }
  .at-square-meters-container {
    position: relative;
    line-height: 29.5px;
    font-weight: 400;
    font-family: Inter;
    color: #5b5b5b;
    text-align: justify;

    font-size: 15px;
  }

  .about-square-meters {
    position: absolute;
    /* top: 35px; */
    bottom: 11px;
    left: 5vh;
    line-height: 54px;
  }

  .vector-parent {
    position: absolute;
    bottom: 0px;
    left: 0px;

    text-align: justify;
    font-size: 34.36px;
  }

  @media (max-width: 768px) {
    .about-square-meters {
      font-size: 23px;
      text-align: left;
      line-height: 24px;
    }
  }

  .post-card {
    background-color: #ffffff !important;
    padding: 30px;
    border-radius: 20px !important;
    margin-bottom: 60px;
    display: block;
    position: relative;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }

  .post-card-image {
    margin-top: -60px;
    margin-bottom: 25px;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    -webkit-box-shadow:
      0 10px 10px rgba(0, 0, 0, 0.08),
      0 0 0 transparent;
    box-shadow:
      0 10px 10px rgba(0, 0, 0, 0.08),
      0 0 0 transparent;
  }

  .post-card-image img {
    border-radius: 20px;
    -webkit-transition: all 0.9s ease-in-out;
    transition: all 0.9s ease-in-out;
  }

  .post-card-image img:hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .post-card:hover .post-card-image img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .post-card:hover .post-card-content .entry-title a {
    color: #131315;
    display: inline;
    padding-bottom: 0;
    -webkit-transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(currentColor),
      color-stop(98%, currentColor)
    );
    background-image: linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 98%
    );
    background-size: 0 1px;
    background-repeat: no-repeat;
    background-position: left 100%;
    overflow: visible !important;
    text-decoration: none;
    background-size: 100% 1px;
  }

  .post-card:hover .post-card-content .entry-title a:hover {
    color: #131315;
    text-decoration: none;
    background-size: 100% 1px;
  }

  .post-card:hover .post-card-content .entry-meta .post-author a {
    color: #131315;
  }

  .post-list {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 20px;
    margin-bottom: 30px;
    padding: 30px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }

  .post-list-image {
    width: 50%;
    margin-right: 25px;
    margin-left: -60px;
    overflow: hidden;
    border-radius: 20px;
  }

  .post-list-image img {
    border-radius: 20px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }

  .post-list-content {
    width: 50%;
  }

  .post-list:hover .post-list-image img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .post-list:hover .post-list-content .entry-title a {
    color: #131315;
    display: inline;
    padding-bottom: 0;
    -webkit-transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(currentColor),
      color-stop(98%, currentColor)
    );
    background-image: linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 98%
    );
    background-size: 0 1px;
    background-repeat: no-repeat;
    background-position: left 100%;
    overflow: visible !important;
    text-decoration: none;
    background-size: 100% 1px;
  }

  .post-list:hover .post-list-content .entry-title a:hover {
    color: #131315;
    text-decoration: none;
    background-size: 100% 1px;
  }

  .post-list:hover .post-list-content .entry-meta .post-author a {
    color: #131315;
  }

  /* ------------------------------
                Post-single
        ------------------------------ */
  .post-single {
    background-color: #ffffff !important;
    padding: 30px;
    border-radius: 20px !important;
    margin-bottom: 30px;
    margin-top: 30px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }

  .post-single-image {
    margin-top: -60px;
    margin-bottom: 40px;
    border-radius: 20px;
  }

  .post-single-image img {
    border-radius: 20px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
  }

  .post-single-video,
  .post-single-audio {
    margin-top: -60px;
    margin-bottom: 30px;
    border-radius: 20px;
  }

  .post-single-video iframe,
  .post-single-audio iframe {
    width: 100%;
    height: 500px;
    border: 0px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    border-radius: 20px;
  }

  .post-single-gallery {
    margin-top: -60px;
    margin-bottom: 30px;
    border-radius: 20px;
  }

  .post-single-gallery .slider-style5 {
    padding: 0;
    border-radius: 20px;
  }

  .post-single-gallery .slider-style5 .slider-item {
    border-radius: 20px;
  }

  .post-single-gallery .slider-style5 .slider-item:after {
    display: none;
    border-radius: 20px;
  }

  .post-single-gallery .slider-style5 .swiper-button-next,
  .post-single-gallery .slider-style5 .swiper-button-prev {
    background-color: #ffffff;
  }

  .post-single-gallery .slider-style5 .swiper-button-next:after,
  .post-single-gallery .slider-style5 .swiper-button-prev:after {
    color: #131315;
  }

  .post-single-gallery img {
    border-radius: 20px;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    box-shadow: 0px 5px 20px 0px rgba(69, 67, 96, 0.1);
    margin-bottom: 30px;
  }

  .post-single-content .categorie {
    margin-bottom: 20px;
  }

  .post-single-content .title {
    margin-bottom: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .post-single-content .title a:hover {
    color: #f67280;
  }

  .post-single-content p {
    margin-bottom: 30px;
  }

  .post-single-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 7px;
  }

  .post-single-info li {
    margin-bottom: 0;
    font-size: 13px;
    color: #94979e;
    text-transform: capitalize;
    font-weight: 400;
  }

  .post-single-body {
    margin-top: 30px;
  }

  .post-single-body h5 {
    margin-top: 30px;
    margin-bottom: 10px;
  }

  .post-single-body .image {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .post-single-body .image img {
    border-radius: 5px;
  }

  .post-single-body .image p {
    color: #94979e;
    text-align: center;
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 0px;
  }

  .post-single-body .quote {
    background-color: #f9f9ff;
    padding: 20px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
  }

  .post-single-body .quote i {
    font-size: 30px;
    color: #f67280;
  }

  .post-single-body .quote p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    color: #131315;
    font-weight: 900;
  }

  .post-single-body .quote small {
    color: #94979e;
    font-weight: 400;
  }

  .post-single-body .list {
    margin-bottom: 15px;
  }

  .post-single-body .list li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 10px;
  }

  .post-single-body .list li:before {
    background-color: #94979e;
    border-radius: 50%;
    position: absolute;
    content: "";
    left: 0;
    top: 12px;
    width: 5px;
    height: 5px;
  }

  .post-single-footer {
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .post-single-footer .tags ul li {
    background-color: #f9f9ff;
    padding: 4px 11px;
    margin-bottom: 5px;
    margin-right: 2px;
    border-radius: 20px;
    font-size: 13px;
    text-transform: capitalize;
    color: #444;
    font-weight: 500;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .post-single-footer .tags ul li:hover {
    background-color: #f67280 !important;
  }

  .post-single-footer .tags ul li:hover a {
    color: #ffffff !important;
  }

  .post-single-footer .social-media {
    text-align: center;
    margin-left: auto;
  }

  .entry-title a {
    color: #0d463b;
    display: inline;
    padding-bottom: 0;
    -webkit-transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(currentColor),
      color-stop(98%, currentColor)
    );
    background-image: linear-gradient(
      to bottom,
      currentColor 0%,
      currentColor 98%
    );
    background-size: 0 1px;
    background-repeat: no-repeat;
    background-position: left 100%;
    overflow: visible !important;
  }

  .categorie {
    background-color: #f67280;
    color: #ffffff;
    border-radius: 20px;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    font-family: "Inter Tight", sans-serif;
    padding: 6px 12px 6px 12px;
    font-weight: 600;
    font-size: 12px;
    border-radius: 20px;
    text-transform: capitalize;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
  }

  .entry-meta .post-author a {
    font-weight: 600;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .post-card-image img {
    border-radius: 20px;
    -webkit-transition: all 0.9s ease-in-out;
    transition: all 0.9s ease-in-out;
    height: 245px;
    width: 100%;
  }

  .entry-meta li {
    text-transform: capitalize;
    font-weight: 600;
    color: #444;
    font-size: 13px;
    font-family: "Inter Tight", sans-serif;
  }
</style>
