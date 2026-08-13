<template>
  <div class="flex flex-col justify-end items-end">
    <GlobalMapControlsZoom @zoomIn="zoomIn" @zoomOut="zoomOut" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
}>();

defineProps<{
  showZoomControls: boolean;
}>();

function zoomIn() {
  emit('zoom-in');
}

function zoomOut() {
  emit('zoom-out');
}
</script>