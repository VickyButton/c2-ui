import type { GlobalMapConstructor } from '~/services/GlobalMap.types';

// TODO: Add config interface for max zoom, min zoom, etc.
const MIN_ZOOM = 0;
const MAX_ZOOM = 20;
const clampZoom = (value: number) => clamp(value, MIN_ZOOM, MAX_ZOOM);

export function useGlobalMap(GlobalMap: GlobalMapConstructor) {
  const map = new GlobalMap();

  function zoomIn() {
    const currentValue = map.zoom;
    const newValue = clampZoom(currentValue + 1);

    map.setZoom(newValue);
  }

  function zoomOut() {
    const currentValue = map.zoom;
    const newValue = clampZoom(currentValue - 1);

    map.setZoom(newValue);
  }

  return {
    map,
    zoomIn,
    zoomOut,
  };
}
