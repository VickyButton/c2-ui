<template>
  <div class="flex flex-col justify-between items-end">
    <GlobalMapControlsLayers @useDefaultLayer="useDefaultLayer" @useSatteliteLayer="useSatteliteLayer" />
    <GlobalMapControlsZoom @zoomIn="zoomIn" @zoomOut="zoomOut" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
  (e: 'use-default-layer'): void;
  (e: 'use-sattelite-layer'): void;
}>();

defineProps<{
  showLayersControls: boolean;
  showZoomControls: boolean;
}>();

function zoomIn() {
  emit('zoom-in');
}

function zoomOut() {
  emit('zoom-out');
}

function useDefaultLayer() {
  emit('use-default-layer');
}

function useSatteliteLayer() {
  emit('use-sattelite-layer');
}
</script>