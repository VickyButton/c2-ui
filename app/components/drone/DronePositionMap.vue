<template>
  <div :id="containerId" />
</template>

<script setup lang="ts">
import type { Drone } from '~/types/devices.types';

import 'ol/ol.css';

const props = defineProps<{
  drone: Drone;
}>();

const containerId = computed(() => `drone-position-map-${props.drone.id}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');

const { map } = useGlobalMap(GlobalMap);

onMounted(() => {
  map.load(containerId.value);
  map.setView(props.drone.coordinates.latitude, props.drone.coordinates.longitude);
});

watch(() => props.drone.coordinates, ({ latitude, longitude}) => {
  map.setView(latitude, longitude);
});
</script>