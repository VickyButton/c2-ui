<template>
  <menu class="flex flex-col gap-y-1 p-1">
    <li>
      <BaseButtonIcon title="Zoom in" @click="zoomIn">
        <BaseIcon name="plus" size="xs" />
      </BaseButtonIcon>
    </li>
    <li>
      <BaseButtonIcon title="Zoom out" @click="zoomOut">
        <BaseIcon name="minus" size="xs" />
      </BaseButtonIcon>
    </li>
  </menu>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'zoom-in'): void;
  (e: 'zoom-out'): void;
}>();

function zoomIn() {
  emit('zoom-in');
}

function zoomOut() {
  emit('zoom-out');
}
</script>