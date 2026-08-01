<template>
  <div class="flex flex-col p-2">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>