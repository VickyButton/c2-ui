import type { GlobalMapConstructor } from '~/services/GlobalMap.types';

export function useGlobalMap(GlobalMap: GlobalMapConstructor) {
  const map = new GlobalMap();

  return {
    map,
  };
}
