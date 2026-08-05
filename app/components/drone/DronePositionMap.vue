<template>
  <GlobalMapContainer :id="containerId" @zoomIn="map.zoomIn" @zoomOut="map.zoomOut" />
</template>

<script setup lang="ts">
import type { GlobalCoordinates2D } from '~/types/map.types';

const props = defineProps<{
  droneId: string;
  droneCoordinates: GlobalCoordinates2D;
}>();

const containerId = computed(() => `drone-position-map-${props.droneId}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');

const map = useGlobalMap(GlobalMap, {
  minZoom: 0,
  maxZoom: 20,
});

onMounted(() => {
  map.load(containerId.value);
  map.setCenter(props.droneCoordinates);
});

watch(() => props.droneCoordinates, (newValue) => {
  map.setCenter(newValue);
});
</script>