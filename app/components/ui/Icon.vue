<template>
  <div :class="{
    'w-8': size === 'sm',
    'w-12': size === 'md',
    'w-16': size === 'lg',
    }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: 'sm' | 'md' | 'lg';
}>(), {
  size: 'md',
});
</script>