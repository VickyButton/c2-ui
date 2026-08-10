<template>
  <AppLayoutPage>
    <AppLayoutPageHeader>
      <BaseBreadcrumbs :breadcrumbs />
    </AppLayoutPageHeader>
    <p>This is the device registration page.</p>
  </AppLayoutPage>
</template>

<script setup lang="ts">
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