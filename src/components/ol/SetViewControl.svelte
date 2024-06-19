<script>
  import { getContextMap } from "./context.svelte.ts";

  let { center } = $props();

  let map = getContextMap();

  function onclick() {
    console.debug("setting view");

    map.instance.getView().setCenter(center);
  }
</script>

<button class="btn btn-sm btn-square" {onclick}> [ ] </button>
