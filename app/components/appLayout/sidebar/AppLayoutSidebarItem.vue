<template>
  <NuxtLink :to>
    <div class="flex flex-row items-center gap-x-2 p-2 bg-secondary-600 hover:bg-secondary-500">
      <slot />
      <span class="text-lg">{{ label }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  to: string;
  label: string;
}>();
</script>