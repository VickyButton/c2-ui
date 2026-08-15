import type { GlobalCoordinates2D, GlobalMapConstructor, GlobalMapOptions, IconMarkerOptions } from '~/types/globalMap.types';

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
    map.hideSatelliteMapTilesLayer();

    // Show default map tiles layer.
    map.showDefaultMapTilesLayer();
  }

  function useSatelliteMapTilesLayer() {
    // Hide non-satellite map tiles layers.
    map.hideDefaultMapTilesLayer();

    // Show satellite map tiles layer.
    map.showSatelliteMapTilesLayer();
  }

  function addIconMarker(id: string, src: string, coordinates: GlobalCoordinates2D, options?: IconMarkerOptions) {
    map.addIconMarker(id, src, coordinates, options);
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
    useSatelliteMapTilesLayer,
    addIconMarker,
    removeIconMarker,
  };
}
