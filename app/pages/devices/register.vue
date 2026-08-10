<template>
  <RegisterDeviceView :breadcrumbs />
</template>

<script setup lang="ts">
useHead({
  title: 'Register Device',
});

definePageMeta({
  middleware: ['auth-guard'],
});

const breadcrumbs = [
  {
    label: 'DEVICES',
    path: '/devices',
  },
  {
    label: 'REGISTER DEVICE',
  },
];
</script>