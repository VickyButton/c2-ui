<template>
  <GlobalMapContainer :id="containerId" @zoomIn="map.zoomIn" @zoomOut="map.zoomOut" @useDefaultLayer="map.useDefaultMapTilesLayer" @useSatteliteLayer="map.useSatteliteMapTilesLayer" />
</template>

<script setup lang="ts">
import type { GlobalCoordinates2D } from '~/types/globalMap.types';

const props = defineProps<{
  droneId: string;
  droneCoordinates: GlobalCoordinates2D;
}>();

const containerId = computed(() => `drone-position-map-${props.droneId}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');

const runtimeConfig = useRuntimeConfig(); // TODO: Abstract config injection.
const map = useGlobalMap(GlobalMap, {
  mapTilesDefaultApiUrl: runtimeConfig.public.mapTilesDefaultApiUrl,
  mapTilesSatteliteApiUrl: runtimeConfig.public.mapTilesSatteliteApiUrl,
  minZoom: 0,
  maxZoom: 20,
});

const MARKER_ID = 'drone-position';
const MARKER_SRC = 'icons/drone.png';

onMounted(() => {
  map.load(containerId.value);
  map.setCenter(props.droneCoordinates);
  map.addIconMarker(MARKER_ID, MARKER_SRC, props.droneCoordinates);
});

watch(() => props.droneCoordinates, (newValue) => {
  map.setCenter(newValue);
  map.removeIconMarker(MARKER_ID);
  map.addIconMarker(MARKER_ID, MARKER_SRC, props.droneCoordinates);
});
</script>