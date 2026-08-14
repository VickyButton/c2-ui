<template>
  <div role="application" class="relative">
    <GlobalMapControls class="absolute z-10 w-full h-full">
      <GlobalMapControlsLayers @useDefaultLayer="useDefaultLayer" @useSatelliteLayer="useSatelliteLayer" />
      <GlobalMapControlsZoom @zoomIn="zoomIn" @zoomOut="zoomOut" />
    </GlobalMapControls>
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