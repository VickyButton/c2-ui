<template>
  <div role="application" class="relative">
    <GlobalMapControls :showLayersControls :showZoomControls class="absolute top-0 z-10 w-full h-full" @zoomIn="zoomIn" @zoomOut="zoomOut" @useDefaultLayer="useDefaultLayer" @useSatteliteLayer="useSatteliteLayer" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
  (e: 'use-default-layer'): void;
  (e: 'use-sattelite-layer'): void;
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

function useSatteliteLayer() {
  emit('use-sattelite-layer');
}
</script>