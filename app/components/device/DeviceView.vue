<template>
  <AppLayoutPage>
    <AppLayoutPageHeader>
      <BaseBreadcrumbs :breadcrumbs />
    </AppLayoutPageHeader>
    <p v-if="device === undefined">No device information available.</p>
    <p v-else>This is the device detail page.</p>
  </AppLayoutPage>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '~/types/breadcrumbs.types';
import type { Device } from '~/types/devices.types';

defineProps<{
  breadcrumbs: Breadcrumb[];
  device?: Device;
}>();
</script>