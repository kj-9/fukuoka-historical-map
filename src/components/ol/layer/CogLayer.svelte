<script lang="ts">
  import WebGLTile from "ol/layer/WebGLTile";
  import GeoTIFF from "ol/source/GeoTIFF";

  import { getContextMap } from "../context.svelte.ts";

  let { url, zIndex = 0, visible = true, opacity, loading = false } = $props();
  let map = getContextMap();

  const cogSource = new GeoTIFF({
    sources: [
      {
        url: url,
      },
    ],
  });

  const cogLayer = new WebGLTile({
    source: cogSource,
    visible,
    zIndex,
    opacity,
  });

  map.instance.addLayer(cogLayer);

  $effect(() => {
    console.debug("adding cog layer");
    cogLayer.setOpacity(opacity);

    return () => {
      if (!map.instance) {
        console.debug("cleaning up cog layer");
        map.instance?.removeLayer(cogLayer);
      }
    };
  });
</script>
