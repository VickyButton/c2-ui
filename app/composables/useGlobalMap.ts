import type { GlobalMapConstructor } from '~/services/GlobalMap.types';
import type { GlobalMapOptions } from '~/types/map.types';

const defaultOptions = {
  minZoom: 0,
  maxZoom: 20,
};

export function useGlobalMap(GlobalMap: GlobalMapConstructor, mapOptions?: Partial<GlobalMapOptions>) {
  const options = {
    ...defaultOptions,
    ...mapOptions,
  };
  const map = new GlobalMap();

  function load(containerId: string) {
    map.load(containerId, options);
  }

  const clampZoom = (value: number) => clamp(value, options.minZoom, options.maxZoom);

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
    load,
    zoomIn,
    zoomOut,
  };
}
