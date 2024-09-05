<script>
  import FaqCarousel from "../../shared/FaqCarousel.svelte";
</script>

<div class="quote-border">This is your content.</div>

<FaqCarousel
  Images1={[
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
  Images2={[
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
  Images3={[
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
    {
      src: "emeka.jpeg",
      text: "Join us on a journey of growth and learning. Engage in personalized training, unwind at happy hours, and more...",
      name: "Emeka Offor",
      position: "Sales Rep",
    },
  ]}
/>

<div class="quote-border"></div>

<style>
  .quote-border {
    position: relative;
    padding: 20px;
    border: 2px solid black;
    margin: 20px;
    text-align: center;
    font-size: 18px;
  }

  .quote-border::before {
    content: '"';
    position: absolute;
    background-color: white; /* Match with the background color */
    padding: 0 5px;
    font-size: 24px; /* Adjust the size of the quotation mark */
    color: black; /* Color of the quotation mark */
  }

  .quote-border::before {
    top: -12px; /* Adjust the position relative to the top border */
    left: 10px; /* Adjust the position relative to the left side */
  }

  
</style>
