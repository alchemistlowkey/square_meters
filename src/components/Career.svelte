<script>
  import DropCard from "./DropCard.svelte";
</script>

<section class="career-bg">
  <div class="container">
    <div class="row mx-0 py-16">
      <div class="col-12 col-md-10 py-10 mx-auto text-center">
        <p class="career text-w pb-3">Careers at SQUARE METRES</p>
        <h1 class="text-w privacy-data py-4">
          A Successful team is a group of many hand and one mind.
        </h1>
        <p class="text-w p-content fs-md-6 pb-4">
          We've assembled an exceptional team of forward thinkers, fueled by
          passion and wielding skills that surpasses the ordinary.
        </p>
        <button class="btn privacy-btn text-w">
          <a href="/contact" target="_blank">All Open Roles</a>
        </button>
      </div>
    </div>
  </div>
</section>

<section class="py-10 mb-16">
  <div class="container">
    <div class="row mx-0 py-10 p-text text-cgreen text-center">
      <div class="col-md-10 offset-md-1">
        <div class="collection text-center">A little about working with us</div>
        <p class="py-2">
          At Square Meters, we prioritize the well-being of our team because
          it's not only the right thing to do, as it is what empowers us to
          deliver our best work.
        </p>

        <p class="py-2">
          Are you beginning your career or already a star, our system provides
          numerous opportunities for you to make a positive impact on people's
          lives.
        </p>
        <p class="py-2">
          SquareMetres is a welcoming place for everyone, and we do our best to
          make sure our people feel supported and happy at work.
        </p>
      </div>
    </div>

    <div class="row mx-0 py-10 p-text text-cgreen text-center">
      <div class="col-md-10 offset-md-1">
        <div class="collection text-center">Life at Square Metres</div>
        <p class="py-2">
          In everything we do, we uphold these values without compromise. At
          Square Meters, its people over process and teamwork over perfection.
        </p>
      </div>
    </div>

    <div class="row mx-0 pt-c p-text text-cgreen text-center">
      <div class="col-4 text-center">
        <img src="/images/goal.png" alt="" class="mx-auto d-block" />
        <p class="py-4 fw-bold">Find your Balance</p>
        <p>
          We recognize the importance of work-life balance. encourage
          collaboration & nurture career growth
        </p>
      </div>
      <div class="col-4 text-center">
        <img src="/images/growth.png" alt="" class="mx-auto d-block" />
        <p class="py-4 fw-bold">A Place For All</p>
        <p>
          Diversity and inclusion are at the core of our beingnetfl. There's a
          space for everyone at Square Metres
        </p>
      </div>
      <div class="col-4 text-center">
        <img src="/images/core-values.png" alt="" class="mx-auto d-block" />
        <p class="py-4 fw-bold">Thrive With Us</p>
        <p>
          Join us on a journey of growth and learning. Engage in personalized
          training, unwind at happy hours, and more ....
        </p>
      </div>
    </div>

    <div class="row mx-0 py-10 p-text text-cgreen text-center">
      <div class="collection text-center py-4">Open positions</div>
      <DropCard />
      <DropCard
        DropHeader="Sales Executive"
        DropContent="We seek the expertise of an experienced sales professional to drive strategic sales initiatives and build strong customer relationships, ultimately leading to increased revenue and long-term business growth."
      />
      <DropCard
        DropHeader="Business Manager"
        DropContent="We seek the expertise of an experienced business manager to oversee and optimize daily operations, implement strategic plans, and drive organizational success through effective leadership and resource management."
      />
      <DropCard
        DropHeader="Social Media Manager"
        DropContent="We seek the expertise of an experienced social media specialist to craft and execute comprehensive social media strategies that enhance brand visibility, engage target audiences, and foster community growth."
      />
      <DropCard
        DropHeader="Driver"
        DropContent="We seek the expertise of a skilled and reliable driver to ensure safe and timely transportation, while maintaining a high standard of service and professionalism in all interactions."
      />
    </div>
  </div>
</section>

<style>
  .career-bg {
    background-image: linear-gradient(#0000009e, #001410),
      url("../lib/img/career.jpeg");
    background-size: cover;
    background-position: center;
  }
</style>
