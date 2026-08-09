<template>
  <section class="flex flex-col gap-y-2">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>