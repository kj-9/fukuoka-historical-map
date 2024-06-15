<script lang="ts">
    import WebGLTile from "ol/layer/WebGLTile";
    import GeoTIFF from "ol/source/GeoTIFF";

    import { getContextMap } from "./context.svelte.ts";
    
    
    let { url, zIndex = 0, visible = true, opacity = 1, loading = false } = $props();
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
    
    $effect(() => {
      map.instance?.addLayer(cogLayer);
    });
  
  </script>
  