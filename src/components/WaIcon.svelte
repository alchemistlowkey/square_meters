<script></script>

<div class="rfloating_btn">
  <a
    class="rcontact"
    target="_blank"
    href="https://wa.me/2348066267094?text=Hello"
  >
    <div class="rcontact_icon">
      <i class="fab fa-whatsapp rmy-float"></i>
    </div>
  </a>
  <p class="rtext_icon text-white">Quick response</p>
</div>

<style>
  .rcontact {
    text-decoration: none;
  }
  .rfloating_btn {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  @keyframes pulsing {
    to {
      box-shadow: 0 0 0 30px rgba(232, 76, 61, 0);
    }
  }

  .rcontact_icon {
    background-color: #42db87;
    color: #fff;
    width: 60px;
    height: 60px;
    font-size: 30px;
    border-radius: 50px;
    text-align: center;
    box-shadow: 2px 2px 3px #999;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translatey(0px);
    animation: pulse 1.5s infinite;
    box-shadow: 0 0 0 0 #42db87;
    -webkit-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulsing 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    font-weight: normal;
    font-family: sans-serif;
    text-decoration: none !important;
    transition: all 300ms ease-in-out;
  }

  .rtext_icon {
    margin-top: 8px;
    color: red !important;
    font-size: 13px;
  }
</style>
