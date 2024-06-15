<script>
    import Map from "./ol/Map.svelte";
    import BaseLayer from "./ol/BaseLayer.svelte";

</script>


<Map center={[0, 0]} zoom={2}>
    <BaseLayer />
</Map>