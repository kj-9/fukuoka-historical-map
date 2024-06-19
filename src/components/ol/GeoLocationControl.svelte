<script>
  import Feature from "ol/Feature.js";
  import Geolocation from "ol/Geolocation.js";
  import Point from "ol/geom/Point.js";
  import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style.js";
  import { Vector as VectorSource } from "ol/source.js";
  import { Vector as VectorLayer } from "ol/layer.js";

  import { getContextMap } from "./context.svelte";

  let map = getContextMap();

  const geolocation = new Geolocation({
    // enableHighAccuracy must be set to true to have the heading value.
    trackingOptions: {
      enableHighAccuracy: true,
    },
    //projection: map.instance.getView().getProjection(),
  });

  navigator.permissions
    .query({ name: "geolocation" })
    .then((permissionStatus) => {
      permissionStatus.onchange = () => {
        if (permissionStatus.state == "granted") {
          map.instance.getView().animate({
            center: geolocation.getPosition(),
            duration: 300,
            zoom: 16,
          });
        }
      };
    });

  // handle geolocation error.
  geolocation.on("error", function (error) {
    console.error("Geolocation error:", error);
  });

  const accuracyFeature = new Feature();
  geolocation.on("change:accuracyGeometry", function () {
    accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
  });

  const positionFeature = new Feature();
  positionFeature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 6,
        fill: new Fill({
          color: "#3399CC",
        }),
        stroke: new Stroke({
          color: "#1234",
          width: 2,
        }),
      }),
    }),
  );
  geolocation.on("change:position", function () {
    const coordinates = geolocation.getPosition();
    positionFeature.setGeometry(coordinates ? new Point(coordinates) : null);
    map.instance.getView().animate({
      center: geolocation.getPosition(),
      duration: 300,
      zoom: 16,
    });
  });

  new VectorLayer({
    map: map.instance,
    source: new VectorSource({
      features: [accuracyFeature, positionFeature],
    }),
    zIndex: 100,
  });

  const onclick = async () => {
    if (!geolocation.getTracking()) {
      await navigator.permissions.query({
        name: "geolocation",
      });
      geolocation.setTracking(true);
    } else {
      geolocation.setTracking(false);
      accuracyFeature.setGeometry(null);
      positionFeature.setGeometry(null);
    }
  };
</script>

<button class="btn btn-sm btn-square text-lg" {onclick}>🧭</button>
