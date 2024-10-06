<script>
  import Bg from "../shared/Bg.svelte";
  import DropCard from "./DropCard.svelte";
  import PageHead from "../shared/PageHead.svelte";
  import ButtonId from "../shared/ButtonId.svelte";
  import Offer from "../shared/Offer.svelte";
  import CardText from "../shared/CardText.svelte";
  import CareerBox from "../shared/CareerBox.svelte";
</script>

<Bg headerBG="career.jpeg">
  <PageHead
    CardHeader="Careers at SQUARE METRES"
    CardContent="A Successful team is a group of many hand and one mind."
    CardContent3="We've assembled an exceptional team of forward thinkers, fueled by
          passion and wielding skills that surpasses the ordinary."
  >
    <ButtonId btnDetails="All Open Roles" btnlink="#positions"></ButtonId>
  </PageHead>
</Bg>

<section class="py-10 mb-16">
  <div class="container">
    <div class="row mx-0">
      <CardText
        TextHeader="A little about working with us"
        TextContent={[
          {
            body: "At Square Meters, we prioritize the well-being of our team because it's not only the right thing to do, as it is what empowers us to deliver our best work.",
          },
          {
            body: "Are you beginning your career or already a star, our system provides numerous opportunities for you to make a positive impact on people's lives.",
          },
          {
            body: "SquareMetres is a welcoming place for everyone, and we do our best to make sure our people feel supported and happy at work.",
          },
        ]}
      ></CardText>

      <CardText
        TextHeader="Life at Square Metres"
        TextContent={[
          {
            body: "In everything we do, we uphold these values without compromise. At Square Meters, its people over process and teamwork over perfection.",
          },
        ]}
      ></CardText>
    </div>
  </div>
</section>

<section class="w-[90%] mx-auto">
  <CareerBox
    CareerDetails={[
      {
        src: "goal.png",
        alt: "goal",
        head: "Find your Balance",
        body:
          "We recognize the importance of work-life balance. encourage collaboration & nurture career growth",
      },
      {
        src: "growth.png",
        alt: "growth",
        head: "A Place For All",
        body:
          "Diversity and inclusion are at the core of our being. There's a space for everyone at Square Metres",
      },
      {
        src: "core-values.png",
        alt: "core-values",
        head: "Thrive With Us",
        body:
          "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more ....",
      },
    ]}>
    </CareerBox>
</section>

<section class="py-10">
  <div class="container">
    <div class="row mx-0 p-text text-cgreen text-center" id="positions">
      <div class="collection text-center py-4 md:text-xl lg:text-2xl text-lg"><h1>Open positions</h1></div>
      <DropCard
        DropHeader="Growth Hacker"
        DropContent="We seek the expertise of an experience marketing specialist to drive a 360 degree marketing campaign and customer experience which leads to customer retention and sales"
        DropBtn="Apply"
      />
      <DropCard
        DropHeader="Sales Associate"
        DropContent="We seek the expertise of an experienced sales professional to drive strategic sales initiatives and build strong customer relationships, ultimately leading to increased revenue and long-term business growth."
        DropBtn="Apply"
      />
      <DropCard
        DropHeader="Business Manager"
        DropContent="We seek the expertise of an experienced business manager to oversee and optimize daily operations, implement strategic plans, and drive organizational success through effective leadership and resource management."
        DropBtn="Apply"
      />
      <DropCard
        DropHeader="Social Media Manager"
        DropContent="We seek the expertise of an experienced social media specialist to craft and execute comprehensive social media strategies that enhance brand visibility, engage target audiences, and foster community growth."
        DropBtn="Apply"
      />
      <DropCard
        DropHeader="Driver"
        DropContent="We seek the expertise of a skilled and reliable driver to ensure safe and timely transportation, while maintaining a high standard of service and professionalism in all interactions."
        DropBtn="Apply"
      />
    </div>
  </div>
</section>

<Offer />

<style>
</style>
