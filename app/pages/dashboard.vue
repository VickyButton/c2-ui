<template>
  <DashboardView />
</template>

<script setup lang="ts">
useHead({
  title: 'Dashboard',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>