<template>
  <GlobalMapContainer :id="containerId" @zoomIn="zoomIn" @zoomOut="zoomOut" />
</template>

<script setup lang="ts">
import type { Drone } from '~/types/devices.types';

const props = defineProps<{
  drone: Drone;
}>();

const containerId = computed(() => `drone-position-map-${props.drone.id}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');

const { map, load, zoomIn, zoomOut } = useGlobalMap(GlobalMap, {
  minZoom: 0,
  maxZoom: 20,
});

onMounted(() => {
  load(containerId.value);
  map.setCenter(props.drone.coordinates);
});

watch(() => props.drone.coordinates, (newValue) => {
  map.setCenter(newValue);
});
</script>