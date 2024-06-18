<script lang="ts">
  import MVT from "ol/format/MVT";
  import VectorTileLayer from "ol/layer/VectorTile";
  import VectorTileSource from "ol/source/VectorTile";

  import { getContextMap } from "./context.svelte.ts";

  import { applyStyle } from "ol-mapbox-style";

  const map = getContextMap();
  const key = "37e73920bd101b0b";
  const style = "light"; // light|dark|white|grayscale|black

  const protomaps = new VectorTileLayer({
    declutter: true,
    zIndex: -20,
    source: new VectorTileSource({
      attributions:
        '<a href="https://protomaps.com">Protomaps</a> © <a href="https://openstreetmap.org">OpenStreetMap</a>',
      format: new MVT(),
      url: "https://api.protomaps.com/tiles/v3/{z}/{x}/{y}.mvt?key=" + key,
    }),
    //style: createMapboxStreetsV6Style(Style, Fill, Stroke, Icon, Text),
  });

  applyStyle(
    protomaps,
    `https://api.protomaps.com/styles/v2/${style}.json?key=${key}`,
  );
  map.instance.addLayer(protomaps);
</script>
