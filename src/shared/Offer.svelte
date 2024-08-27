<section class="md:text-2xl lg:text-4xl text-base">
  <div class="pt-3 px-3">
    <div class="offer-cite">
      <div class="text-content text-md-center">
        <div class="first">Experience SquareMetres Now</div>
        <div class="second text-md-center">Start Investing Today</div>
      </div>
      <div class="button-content">
        <a class="offer-cite-btn hover:bg-orange-700" href="/investment">
          Our Offering
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .offer-cite {
    background-color: #f8f9fa;
    padding: 50px 20px; /* Increased padding for vertical centering */
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    justify-content: center; /* Center content vertically */
  }

  @media (min-width: 768px) {
    .offer-cite {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
      padding: 20px; /* Reset padding for larger screens */
    }

    .text-content {
      flex: 1;
    }

    .button-content {
      flex: 0;
    }
  }

  .offer-cite .first {
    font-weight: 600;
    color: #bbb;
    white-space: nowrap;
  }

  .offer-cite .second {
    font-weight: 600;
    color: #fff;
    margin-top: 10px;
  }

  .offer-cite-btn {
    font-weight: 600;
    color: #fff;
    background-color: #f96b29;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  }
</style>
