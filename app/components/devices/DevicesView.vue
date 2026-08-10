<template>
  <AppLayoutPage>
    <AppLayoutPageHeader>
      <AppLayoutPageTitle>DEVICES</AppLayoutPageTitle>
    </AppLayoutPageHeader>
    <Devices :getDevices :getDevice />
  </AppLayoutPage>
</template>

<script setup lang="ts">
import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '~/types/devicesApi.types';

const props = defineProps<{
  getDevices: DevicesAPI_GetDevices;
  getDevice: DevicesAPI_GetDevice;
}>();
</script>