<template>
  <div :id="containerId" />
</template>

<script setup lang="ts">
import type { Drone } from '~/types/devices.types';

const props = defineProps<{
  drone: Drone;
}>();

const containerId = computed(() => `drone-position-map-${props.drone.id}`);

const GlobalMap = inject(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY);

invariant(GlobalMap !== undefined, 'GlobalMap constructor is not provided.');

const { map } = useGlobalMap(containerId.value, GlobalMap);
</script>