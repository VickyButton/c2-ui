<template>
  <NuxtLink :to>
    <slot name="icon" />
    {{ label }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  label: string;
}>();
</script>