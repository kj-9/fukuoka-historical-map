<script>
    import "ol/ol.css";
    import Map from "ol/Map";
    import { useGeographic } from "ol/proj";
    import View from "ol/View";
    import Attribution from "ol/control/Attribution";

    import {initContextMap} from "./context.svelte.ts"

    let { center, zoom, minZoom = 0, maxZoom =28 } = $props();
    let map = initContextMap();

    const mapId = "olmap";

    $effect(() => {
    useGeographic();
    const attribution = new Attribution({});
    const instance = new Map({
        target: mapId,
        layers: [],
        view: new View({
        center,
        zoom,
        minZoom,
        maxZoom,
        //extent: [103.130035, 0.822573, 104.801331, 1.724593],
        enableRotation: false,
        }),
        controls: [attribution],
    });

    map.instance = instance;
    });
</script>


<div id={mapId} class="h-screen">
    {#if map?.instance}
        <slot />
    {/if}
</div>
  