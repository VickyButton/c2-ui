<template>
  <GlobalMapContainer :id="containerId" @zoomIn="map.zoomIn" @zoomOut="map.zoomOut" @useDefaultLayer="map.useDefaultMapTilesLayer" @useSatelliteLayer="map.useSatelliteMapTilesLayer" />
</template>

<script setup lang="ts">
import type { GlobalCoordinates2D } from '~/types/globalMap.types';

const props = defineProps<{
  droneId: string;
  droneCoordinates: GlobalCoordinates2D;
}>();

const containerId = computed(() => `drone-position-map-${props.droneId}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);
const config = inject(CONFIG_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');
invariant(config !== undefined, 'Config is not provided.');

// TODO: Create useDronePositionMap composable.
const map = useGlobalMap(GlobalMap, {
  mapTilesDefaultApiUrl: config.mapTilesDefaultApiUrl,
  mapTilesSatelliteApiUrl: config.mapTilesSatelliteApiUrl,
  minZoom: 0,
  maxZoom: 20,
});

const MARKER_ID = 'drone-position';
const MARKER_SRC = 'icons/drone.png';
const MARKER_OPTIONS = {
  fillColor: 'rgba(46, 71, 170, 0.4)',
  strokeColor: 'rgb(255, 255, 255)',
}

onMounted(() => {
  map.load(containerId.value);
  map.setCenter(props.droneCoordinates);
  map.addMarker(MARKER_ID, MARKER_SRC, props.droneCoordinates, MARKER_OPTIONS);
});

watch(() => props.droneCoordinates, (newValue) => {
  map.setCenter(newValue);
  map.removeMarker(MARKER_ID);
  map.addMarker(MARKER_ID, MARKER_SRC, props.droneCoordinates, MARKER_OPTIONS);
});
</script>