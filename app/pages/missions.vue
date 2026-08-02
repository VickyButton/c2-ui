<template>
  <MissionsView />
</template>

<script setup lang="ts">
useHead({
  title: 'Missions',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>