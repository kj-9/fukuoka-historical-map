<script>
    import Map from "./ol/Map.svelte";
    import BaseLayer from "./ol/BaseLayer.svelte";
    import CogLayer from "./ol/CogLayer.svelte";


    const CENTER = [130.398, 33.591]; // fukuoka

    function createOpacity(val) {
        return {
            value: val,
            set: (val) => {
                this.value = val;
            },
            get: () => {
                return this.value;
            }
        }
    }


    let opacity= $state(0.2);
</script>


<div class="absolute top-5 left-5 z-10">
  <input bind:value={opacity} type="range" min="0" max="1" step="0.1" class="range"/>
</div>

<Map center={CENTER} zoom={12} minZoom={2} maxZoom={18}>    
  <BaseLayer />
<CogLayer url="https://pub-032bef0ea1394491b7b31e5e413aa462.r2.dev/fukuoka.cog.tif" opacity={opacity} />

</Map>

