<template>
  <RoutesView />
</template>

<script setup lang="ts">
useHead({
  title: 'Routes',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>