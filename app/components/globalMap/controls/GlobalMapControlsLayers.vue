<template>
  <menu class="flex flex-col gap-y-1">
    <li>
      <BaseButtonIcon :title @click="toggleSatelliteMapTilesLayerVisibility">
        <BaseIcon :name size="xs" />
      </BaseButtonIcon>
    </li>
  </menu>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'use-default-layer'): void;
  (e: 'use-satellite-layer'): void;
}>();

const showSatelliteMapTilesLayer = ref(false);
const title = computed(() => showSatelliteMapTilesLayer.value ? 'Use default map' : 'Use satellite map');
const name = computed(() => showSatelliteMapTilesLayer.value ? 'map' : 'globe');

function toggleSatelliteMapTilesLayerVisibility() {
  showSatelliteMapTilesLayer.value = !showSatelliteMapTilesLayer.value;

  if (showSatelliteMapTilesLayer.value) {
    emit('use-satellite-layer');
  } else {
    emit ('use-default-layer');
  }
}
</script>