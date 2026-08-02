<template>
  <DevicesView />
</template>

<script setup lang="ts">
useHead({
  title: 'Devices',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>