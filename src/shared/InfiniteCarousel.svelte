<script>
  export let Logos = [];
</script>

{#if Logos}
<section>
    <div class="logos">
        {#each Logos as logo}
        <div class="logos-slide">
          <div class="card">
            <div
              class="card-body btn hover:border-[#f96b29] text-left border-[#0d493d] text-wrap text-[#0d493d] hover:text-[#f9fffd] hover:bg-[#0d493d] py-5 px-5"
            >
              “<br />{logo.word}
            </div>
        </div>
    </div>
    {/each}
    </div>
</section>
{/if}

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    background-color: #f9fffd;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    overflow: hidden;
    padding: 60px 0;
    white-space: nowrap;
    position: relative;
  }

  .logos:before,
  .logos:after {
      position: absolute;
      top: 0;
      width: 25dvh;
      height: 100%;
      content: "";
      z-index: 2;
    }
    
    .logos:before {
        left: 0;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), #f96b29);
        border-radius: 20px 0 0 20px;
  }

  .logos:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #f96b29);
    border-radius: 0 20px 20px 0;
  }

  .logos:hover .logos-slide {
    animation-play-state: paused;
  }

  .logos-slide {
    display: inline-block;
    animation: 10s slide infinite linear;
  }

  .logos-slide .card {
    height: 200px;
    width: 250px;
    margin: 0 10px;
    border-color: #0d493d;
  }
</style>
