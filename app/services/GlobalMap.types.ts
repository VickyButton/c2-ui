import type { GlobalMap } from '~/types/map.types';

export type GlobalMapConstructor = new (containerId: string) => GlobalMap;
