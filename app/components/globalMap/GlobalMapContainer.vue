<template>
  <div role="application" class="relative">
    <GlobalMapControlsLayers @useDefaultLayer="useDefaultLayer" @useSatelliteLayer="useSatelliteLayer" class="absolute z-10 top-1 right-1" />
    <GlobalMapControlsZoom @zoomIn="zoomIn" @zoomOut="zoomOut" class="absolute z-10 bottom-1 right-1" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
  (e: 'use-default-layer'): void;
  (e: 'use-satellite-layer'): void;
}>();

withDefaults(defineProps<{
  showLayersControls?: boolean;
  showZoomControls?: boolean;
}>(), {
  showLayersControls: true,
  showZoomControls: true,
});

function zoomIn() {
  emit('zoom-in');
}

function zoomOut() {
  emit('zoom-out');
}

function useDefaultLayer() {
  emit('use-default-layer');
}

function useSatelliteLayer() {
  emit('use-satellite-layer');
}
</script>