<template>
  <SettingsView />
</template>

<script setup lang="ts">
useHead({
  title: 'Settings',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>