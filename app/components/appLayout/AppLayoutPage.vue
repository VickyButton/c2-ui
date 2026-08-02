<template>
  <div class="flex flex-col gap-y-2 py-2 px-4">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>