<script>
  import { getContextMap } from "./context.svelte.ts";
  import { easeOut } from "ol/easing.js";

  let toggle = true;
  let duration = 250;

  let map = getContextMap();
  const initailRotation = map.instance.getView().getRotation();
  console.debug("initial rotation", initailRotation);

  function resetNorthOrInitialRotation() {
    const view = map.instance.getView();
    if (!view) {
      // the map does not have a view, so we can't act
      // upon it
      return;
    }

    const rotation = view.getRotation();
    if (rotation !== undefined) {
      if (duration > 0) {
        view.animate({
          rotation: toggle ? 0 : initailRotation, // north or initial rotation
          duration,
          easing: easeOut,
        });
        toggle = !toggle;
      } else {
        view.setRotation(0);
      }
    }
  }

  const rotationToTransform = (rotation) => {
    return "rotate(" + rotation + "rad)";
  };

  let transform = rotationToTransform(initailRotation);
  map.instance.getView().on(["change:rotation"], (e) => {
    const rotation = e.target.getRotation();
    transform = rotationToTransform(rotation);
  });
</script>

<button
  class="btn btn-sm btn-square text-lg"
  onclick={resetNorthOrInitialRotation}
>
  <div style="transform: {transform}">⇧</div>
</button>
