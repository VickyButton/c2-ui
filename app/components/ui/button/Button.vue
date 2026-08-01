<template>
  <button :type class="px-2 py-1 border">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'button' | 'reset' | 'submit';
}>(), {
  type: 'button',
});
</script>