import { setContext, getContext } from "svelte";
import { Map } from "ol";

function createMap(instance: Map) {
  let _instance = $state(instance);
  return {
    get instance() {
      return _instance;
    },
    set instance(value) {
      _instance = value;
    },
  };
}

export function initContextMap() {
  return setContext("map", createMap(null));
}

export function getContextMap() {
  return getContext("map");
}
