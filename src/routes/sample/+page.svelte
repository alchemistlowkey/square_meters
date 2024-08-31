<script>
  import { enhance } from "$app/forms";
  import Product from "../../components/Product.svelte";
  export let title = "Square Metres - Product";
  export let form;
  console.log(form);
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Product />

<section class="pt-[100px] pb-5">
  <div class="container">
    <div class="row">
      <form
        method="post"
        action="?/create"
        use:enhance={({ formElement }) => {
          return async ({ result, update }) => {
            if (result) {
              update({ success: true });
              setTimeout(() => {
                update({ success: false });
              }, 3000);
            }
            if (result?.missing) {
              update({ missing: true });
              setTimeout(() => {
                update({ missing: false });
              }, 3000);
            }
            if (result?.short) {
              update({ short: true });
              setTimeout(() => {
                update({ short: false });
              }, 3000);
            }
            if (result?.incorrect) {
              update({ incorrect: true });
              setTimeout(() => {
                update({ incorrect: false });
              }, 3000);
            }
            if (result?.exists) {
              update({ exists: true });
              setTimeout(() => {
                update({ exists: false });
              }, 3000);
            }            
          };
        }}
      >
        {#if form?.success}
          <p class="success">The form was submitted successfully</p>
        {/if}
        {#if form?.missing}
          <p class="error">The field is required</p>
        {/if}
        {#if form?.short}
          <p class="error">The email is too short</p>
        {/if}
        {#if form?.incorrect}
          <p class="error">The email is not correct</p>
        {/if}
        {#if form?.exists}
          <p class="error">The email already exists</p>
        {/if}

        <div class="input-group d-block">
          <input
            type="text"
            name="name"
            value={form?.name ?? ""}
            class="form-control w-50 rounded mx-0 my-5"
            placeholder="Type your name"
          />
          <input
            type="email"
            name="email"
            value={form?.email ?? ""}
            class="form-control w-50 rounded mx-0 my-5"
            placeholder="Type your email"
          />
          <button type="submit" class="btn bg-green rounded text-white"
            >SIGN UP</button
          >
        </div>
      </form>
    </div>
  </div>
</section>
