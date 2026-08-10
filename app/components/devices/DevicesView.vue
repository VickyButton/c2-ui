<template>
  <AppLayoutPage>
    <AppLayoutPageHeader>
      <AppLayoutPageTitle>DEVICES</AppLayoutPageTitle>
      <NuxtLink to="/devices/register" class="ml-auto">
        <BaseButtonPrimary class="gap-x-1">
          <BaseIcon size="xs" name="plus" />
          REGISTER DEVICE
        </BaseButtonPrimary>
      </NuxtLink>
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