<script>
  import "ol/ol.css";
  import Map from "ol/Map";
  import { useGeographic } from "ol/proj";
  import View from "ol/View";
  import Attribution from "ol/control/Attribution"; //import Rotate from 'ol/control/Rotate.js';
  import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
  } from "ol/interaction.js";

  import { initContextMap } from "./context.svelte.ts";

  let { center, rotation, zoom, minZoom = 0, maxZoom = 28 } = $props();
  let map = initContextMap();

  const mapId = "olmap";

  $effect(() => {
    useGeographic();
    const instance = new Map({
      target: mapId,
      controls: [new Attribution({ collapsible: false })],
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      view: new View({
        center,
        zoom,
        minZoom,
        maxZoom,
        rotation,
        //extent: [103.130035, 0.822573, 104.801331, 1.724593],
      }),
    });

    map.instance = instance;
  });
</script>

<div id={mapId} class="h-dvh relative">
  {#if map?.instance}
    <slot />
  {/if}
</div>
