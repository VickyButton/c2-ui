<template>
  <menu class="flex flex-col gap-y-1 p-1">
    <li>
      <BaseButtonIcon :title @click="toggleSatteliteMapTilesLayerVisibility">
        <BaseIcon :name size="xs" />
      </BaseButtonIcon>
    </li>
  </menu>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'use-default-layer'): void;
  (e: 'use-sattelite-layer'): void;
}>();

const showSatteliteMapTilesLayer = ref(false);
const title = computed(() => showSatteliteMapTilesLayer.value ? 'Use default map' : 'Use sattelite map');
const name = computed(() => showSatteliteMapTilesLayer.value ? 'map' : 'globe');

function toggleSatteliteMapTilesLayerVisibility() {
  showSatteliteMapTilesLayer.value = !showSatteliteMapTilesLayer.value;

  if (showSatteliteMapTilesLayer.value) {
    emit('use-sattelite-layer');
  } else {
    emit ('use-default-layer');
  }
}
</script>