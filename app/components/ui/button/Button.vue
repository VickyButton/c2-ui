<template>
  <button :type class="px-4 py-2">
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