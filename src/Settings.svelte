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
  class="flex-1 bg-gray-800 max-w-sm space-y-5 p-5 flex flex-col justify-start overflow-auto"
>
  <h1 class="text-gray-100 text-5xl text-center">Settings</h1>
  <label>
    <p>Width</p>
    <input type="range" bind:value={settings.width} min="8" max="100" />
    <input type="number" bind:value={settings.width} min="8" max="100" />
  </label>
  <label>
    <p>Height</p>
    <input type="range" bind:value={settings.height} min="8" max="100" />
    <input type="number" bind:value={settings.height} min="8" max="100" />
  </label>
  <label>
    <p>Color/Fade/Strike</p>
    <input type="color" bind:value={settings.color} />
    <input type="color" bind:value={settings.fade} />
    <input type="color" bind:value={settings.strike} />
  </label>
  <label>
    <p>Interval (ms)</p>
    <input
      type="range"
      bind:value={settings.interval}
      min="0"
      max="1000"
      step="10"
    />
    <p>Fade time (ms)</p>
    <input
      type="range"
      bind:value={settings.fade_time}
      min="0"
      max="10000"
      step="100"
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
