<template>
  <RegisterDeviceView />
</template>

<script setup lang="ts">
useHead({
  title: 'Register Device',
});

definePageMeta({
  middleware: ['auth-guard'],
});
</script>