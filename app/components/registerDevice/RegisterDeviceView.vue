<template>
  <AppLayoutPage>
    <AppLayoutPageHeader>
      <BaseBreadcrumbs :breadcrumbs />
    </AppLayoutPageHeader>
    <p>This is the device registration page.</p>
  </AppLayoutPage>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '~/types/breadcrumbs.types';

defineProps<{
  breadcrumbs: Breadcrumb[];
}>();
</script>