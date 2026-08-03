<template>
  <span class="px-2 border" :class="{
    'border-gray-300 text-gray-300 bg-gray-300/20': variant === 'neutral',
    'border-green-500 text-green-500 bg-green-500/20': variant === 'success',
    'border-yellow-500 text-yellow-500 bg-yellow-500/20': variant === 'warning',
    'border-red-500 text-red-500 bg-red-500/20': variant === 'danger',
  }">{{ label }}</span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label: string;
  variant: 'neutral' | 'success' | 'warning' | 'danger';
}>(), {
  variant: 'neutral',
});
</script>