import type { GlobalMapConstructor } from '~/services/GlobalMap.types';

export function useGlobalMap(containerId: string, GlobalMap: GlobalMapConstructor) {
  const map = new GlobalMap(containerId);

  return {
    map,
  };
}
