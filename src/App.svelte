<script>
  import Lightning from "./Lightning.svelte";
  import Settings from "./Settings.svelte";
</script>

<main class="w-screen h-screen bg-gray-800 flex">
  <Settings />
  <Lightning />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
