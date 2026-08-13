<template>
  <div role="application" class="relative">
    <GlobalMapControls :showZoomControls class="absolute top-0 z-10 w-full h-full" @zoomIn="zoomIn" @zoomOut="zoomOut"  />
  </div>
</template>

<script setup lang="ts">
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