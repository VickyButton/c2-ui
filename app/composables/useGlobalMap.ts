import type { GlobalCoordinates2D, GlobalMapConstructor, GlobalMapOptions } from '~/types/globalMap.types';

const defaultOptions = {
  minZoom: 0,
  maxZoom: 20,
};

export function useGlobalMap(GlobalMap: GlobalMapConstructor, mapOptions: GlobalMapOptions) {
  const options = {
    ...defaultOptions,
    ...mapOptions,
  };
  const map = new GlobalMap();

  function load(containerId: string) {
    map.load(containerId, options);
  }

  function setCenter(value: GlobalCoordinates2D) {
    map.setCenter(value);
  }

  const clampZoom = (value: number) => clamp(value, options.minZoom, options.maxZoom);

  function setZoom(value: number) {
    map.setZoom(clampZoom(value));
  }

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

  function useDefaultMapTilesLayer() {
    // Hide non-default map tiles layers.
    map.hideSatteliteMapTilesLayer();

    // Show default map tiles layer.
    map.showDefaultMapTilesLayer();
  }

  function useSatteliteMapTilesLayer() {
    // Hide non-sattelite map tiles layers.
    map.hideDefaultMapTilesLayer();

    // Show sattelite map tiles layer.
    map.showSatteliteMapTilesLayer();
  }

  function addIconMarker(id: string, src: string, coordinates: GlobalCoordinates2D) {
    map.addIconMarker(id, src, coordinates);
  }

  function removeIconMarker(id: string) {
    map.removeIconMarker(id);
  }

  return {
    load,
    setCenter,
    setZoom,
    zoomIn,
    zoomOut,
    useDefaultMapTilesLayer,
    useSatteliteMapTilesLayer,
    addIconMarker,
    removeIconMarker,
  };
}
