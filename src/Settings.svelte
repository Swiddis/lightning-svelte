<script>
  import { lightning_settings } from "./store.js";
  let settings;

  lightning_settings.subscribe((value) => {
    settings = value;
  });

  const submitSettings = () => {
    lightning_settings.set(settings);
  };
</script>

<div
  class="flex-1 bg-gray-800 max-w-sm space-y-5 p-5 flex flex-col justify-start"
>
  <h1 class="text-gray-100 text-5xl text-center">Settings</h1>
  <label>
    <p>Width</p>
    <input type="range" bind:value={settings.width} min="8" max="400" />
    <input type="number" bind:value={settings.width} min="8" max="400" />
  </label>
  <label>
    <p>Height</p>
    <input type="range" bind:value={settings.height} min="8" max="400" />
    <input type="number" bind:value={settings.height} min="8" max="400" />
  </label>
  <label>
    <p>Color</p>
    <input type="color" bind:value={settings.color} />
  </label>
  <label>
    <p>Interval</p>
    <input
      type="range"
      bind:value={settings.interval}
      min="0"
      max="1"
      step="0.01"
    />
    <input
      type="number"
      bind:value={settings.interval}
      min="0"
      max="1"
      step="0.01"
    />
  </label>
  <label>
    <p>Check diagonals?</p>
    <input
      type="checkbox"
      bind:checked={settings.check_diagonals}
      class="form-checkbox h-8 w-8"
    />
  </label>
  <label>
    <p>Show numbers?</p>
    <input
      type="checkbox"
      bind:checked={settings.show_numbers}
      class="form-checkbox h-8 w-8"
    />
  </label>
  <button
    on:click={submitSettings}
    class="text-gray-100 py-3 px-12 w-min self-center">Update</button
  >
</div>

<style lang="postcss">
  label {
    @apply space-y-2;
  }

  p {
    @apply text-gray-100 text-xl;
  }

  input {
    @apply w-full;
  }
</style>
