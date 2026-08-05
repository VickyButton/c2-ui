<template>
  <div role="application" class="relative">
    <GlobalMapControlsZoom v-if="showZoomControls" class="absolute bottom-0 right-0 z-10" @zoomIn="zoomIn" @zoomOut="zoomOut" />
  </div>
</template>

<script setup lang="ts">
import 'ol/ol.css';

const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
}>();

withDefaults(defineProps<{
  showZoomControls?: boolean;
}>(), {
  showZoomControls: true,
});

function zoomIn() {
  emit('zoom-in');
}

function zoomOut() {
  emit('zoom-out');
}
</script>