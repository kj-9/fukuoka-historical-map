<script>
  import Map from "./ol/Map.svelte";
  import BaseLayer from "./ol/BaseLayer.svelte";
  import CogLayer from "./ol/CogLayer.svelte";
  import RotateControl from "./ol/RotateControl.svelte";

  const CENTER = [130.398, 33.591]; // fukuoka
  const ROTATION = 0.6788023617718635;

  let opacity = $state(0.8);
</script>

<Map center={CENTER} rotation={ROTATION} zoom={12} minZoom={2} maxZoom={18}>
  <div class="absolute top-5 left-5 z-10 flex items-center gap-3">
    <RotateControl autoHide={true} />
    <input
      bind:value={opacity}
      type="range"
      min="0"
      max="1"
      step="0.1"
      class="range range-sm"
    />
  </div>

  <BaseLayer />
  <CogLayer
    url="https://pub-032bef0ea1394491b7b31e5e413aa462.r2.dev/fukuoka.cog.tif"
    {opacity}
  />
</Map>
