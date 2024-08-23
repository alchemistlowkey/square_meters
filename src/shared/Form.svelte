<script>
  export let formHeader = "";
  export let formText = "";
  export let fullName = "";
  export let email = "";
  export let phoneNumber = "";
  export let date = "";
  export let amount = "";
  export let preferredSize = "";
  export let message = "";
</script>

<section class="bg-white">
  <div class="container text-cgreen text-start fw-medium">
    <div class="row mx-0">
      <h1 class="fw-bold fs-2">{formHeader}</h1>
      <p class="text-uppercase fw-normal fs-6 mt-3">{formText}</p>
    </div>
    <form action="">
      <div class="row mx-0 my-4">
        {#if fullName}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="fullname">{fullName}</label>
              <input
                type="text"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="fullname"
              />
            </div>
          </div>
        {/if}
        {#if email}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="email">{email}</label>
              <input
                type="email"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="email"
              />
            </div>
          </div>
        {/if}
      </div>
      <div class="row mx-0 my-4">
        {#if phoneNumber}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="phone-number">{phoneNumber}</label>
              <input
                type="number"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="phonenumber"
              />
            </div>
          </div>
        {/if}
        {#if date}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="date">{date}</label>
              <input
                type="date"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="date"
              />
            </div>
          </div>
        {/if}
        {#if amount}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="amount">{amount}</label>
              <input
                type="number"
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="amount"
              />
            </div>
          </div>
        {/if}
        {#if message}
          <div class="col-md-6 col-12">
            <div class="form-group">
              <label for="message">{message}</label>
              <textarea
                class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
                id="message"
              ></textarea>
            </div>
          </div>
        {/if}
      </div>
      <div class="row mx-0">
        {#if preferredSize}
          <div>
            <p>Preferred Size</p>
            <div class="mt-3">
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="flexRadioDefault"
                  id="defaultCheckRadio"
                  checked
                />
                <label class="form-check-label px-2" for="defaultRadio">
                  300sqm
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="flexRadioDefault"
                  id="defaultRadio"
                />
                <label class="form-check-label px-2" for="defaultCheckRadio">
                  500sqm
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input mt-[12px]"
                  type="radio"
                  name="flexRadioDefault"
                  id="defaultRadio"
                />
                <label class="form-check-label px-2" for="defaultCheckRadio">
                  1000sqm
                </label>
              </div>
            </div>
          </div>
        {/if}
      </div>
      <div class="row mx-0">
        <div class="my-4 mb-4">
          <button
            type="submit"
            class="btn btn-xs hover:bg-orange-400 privacy-btn text-w"
            >Submit</button
          >
        </div>
      </div>
    </form>
  </div>
</section>

<style>
  /* Add your custom styles here */
</style>
