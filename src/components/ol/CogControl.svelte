<script>
  import CogLayer from "./layer/CogLayer.svelte";

  let { url, initialOpacity = 0.8 } = $props();
  let opacity = $state(initialOpacity);
</script>

<input
  bind:value={opacity}
  type="range"
  min="0"
  max="1"
  step="0.1"
  class="range range-sm"
/>

<CogLayer {url} {opacity} />
