<script>
  import Map from "./ol/Map.svelte";
  import BaseLayer from "./ol/layer/BaseLayer.svelte";
  import CogControl from "./ol/CogControl.svelte";
  import RotateControl from "./ol/RotateControl.svelte";
  import SetViewControl from "./ol/SetViewControl.svelte";

  const CENTER = [130.4030020104645, 33.591078733935646]; // fukuoka

  const ROTATION = 0.6788023617718635;
  const COG_URL =
    "https://pub-032bef0ea1394491b7b31e5e413aa462.r2.dev/fukuoka.cog.tif";

  const INITIAL_OPACITY = 0.8;
  const INITIAL_ZOOM = 13;
</script>

<Map
  center={CENTER}
  rotation={ROTATION}
  zoom={INITIAL_ZOOM}
  minZoom={2}
  maxZoom={18}
>
  <!-- use sm:bottom-auto to cancel bottom-x -->
  <div class="z-10 absolute bottom-5 left-5 sm:top-5 sm:bottom-auto">
    <div class="flex items-center gap-3">
      <SetViewControl center={CENTER} rotation={ROTATION} zoom={INITIAL_ZOOM} />
      <RotateControl autoHide={true} />
      <CogControl url={COG_URL} initialOpacity={INITIAL_OPACITY} />
    </div>

    <BaseLayer />
  </div></Map
>
