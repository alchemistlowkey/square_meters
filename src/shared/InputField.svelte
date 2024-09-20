<script>
  export let label;
  export let name;
  export let value;
  export let type = "text"; // Default input type
  export let required = false;
</script>

<div class="col-md-6 col-12">
  <div class="form-group">
    <label for={name}>{label}</label>

    {#if type === "textarea"}
      <textarea
        id={name}
        {name}
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      ></textarea>
    {:else if type === "number"}
      <input
        id={name}
        {name}
        type="number"
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      />
    {:else if type === "email"}
      <input
        id={name}
        {name}
        type="email"
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      />
    {:else if type === "tel"}
      <input
        id={name}
        {name}
        type="tel"
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      />
    {:else if type === "date"}
      <input
        id={name}
        {name}
        type="date"
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      />
    {:else}
      <input
        id={name}
        {name}
        type="text"
        class="form-control md:h-14 sm:h-12 border-2 border-gray-300"
        bind:value
        {required}
      />
    {/if}
  </div>
</div>
