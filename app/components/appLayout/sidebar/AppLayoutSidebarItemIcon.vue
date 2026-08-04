<template>
  <BaseIcon :name size="sm">
    <slot />
  </BaseIcon>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>