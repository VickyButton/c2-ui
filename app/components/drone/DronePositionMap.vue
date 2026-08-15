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

const map = useGlobalMap(GlobalMap, {
  mapTilesDefaultApiUrl: config.mapTilesDefaultApiUrl,
  mapTilesSatelliteApiUrl: config.mapTilesSatelliteApiUrl,
  minZoom: 0,
  maxZoom: 20,
});

const { getIcon } = useIcon();
const { createIconMarkerOptions } = useMarkerOptions(getIcon);
const MARKER_ID = 'drone-position';
const markerOptions = createIconMarkerOptions('drone');

onMounted(() => {
  map.load(containerId.value);
  map.setCenter(props.droneCoordinates);
  map.addMarker(MARKER_ID, props.droneCoordinates, markerOptions);
});

watch(() => props.droneCoordinates, (newValue) => {
  map.setCenter(newValue);
  map.removeMarker(MARKER_ID);
  map.addMarker(MARKER_ID, newValue, markerOptions);
});
</script>