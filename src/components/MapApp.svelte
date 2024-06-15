<script>
    import Map from "./ol/Map.svelte";
    import BaseLayer from "./ol/BaseLayer.svelte";
    import CogLayer from "./ol/CogLayer.svelte";


    const CENTER = [130.398, 33.591]; // fukuoka
</script>

<Map center={CENTER} zoom={12} minZoom={2} maxZoom={18}>
  <BaseLayer />
  <CogLayer url="https://pub-032bef0ea1394491b7b31e5e413aa462.r2.dev/fukuoka.cog.tif" opacity={0.2} />
</Map>
