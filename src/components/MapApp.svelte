<script>
    import Map from "./ol/Map.svelte";
    import BaseLayer from "./ol/BaseLayer.svelte";


    const CENTER = [130.398, 33.591]; // fukuoka
</script>

<Map center={CENTER} zoom={12} minZoom={2} maxZoom={18}>
  <BaseLayer />
</Map>
