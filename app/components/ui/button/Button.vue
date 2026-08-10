<template>
  <button :type class="flex flex-row justify-center items-center px-2 py-1 border">
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