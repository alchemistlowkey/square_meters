<!-- RadioGroup.svelte - Reusable Radio Group Component -->
<script>
    export let options = [];
    export let name;
    export let selectedValue;
    export let onChange = () => {};
  
    function handleChange(event) {
      onChange(event.target.value);
    }
  </script>
  
  <div class="form-group">
    {#each options as { value, label }}
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name={name}
          value={value}
          id={name + value}
          on:change={handleChange}
          checked={selectedValue === value}
        />
        <label class="form-check-label" for={name + value}>
          {label}
        </label>
      </div>
    {/each}
  </div>
  