<template>
  <ul class="grid grid-cols-3 gap-4">
    <p v-if="devices.length === 0">No devices registered.</p>
    <li v-for="device in devices">
      <DroneInformationCard v-if="device.type === 'drone'" :drone="device" @sync="syncDevice(device.id)" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '~/types/DevicesAPI.types';
import { useDevicesGroup } from '~/composables/devices/useDevicesGroup';

const props = defineProps<{
  getDevices: DevicesAPI_GetDevices;
  getDevice: DevicesAPI_GetDevice;
}>();

const { devices, loadDevices, syncDevice } = useDevicesGroup({
  getDevices: props.getDevices,
  getDevice: props.getDevice,
});

onMounted(async () => {
  await loadDevices();
});
</script>