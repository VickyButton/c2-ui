<template>
  <div class="flex flex-col gap-y-4">
    <p v-if="devices.length === 0">No devices registered.</p>
    <section v-if="drones.length > 0" class="flex flex-col gap-y-2">
      <h2>DRONES</h2>
      <ul class="grid grid-cols-3 gap-4">
        <li v-for="drone in drones">
          <DroneInformationCard :drone @sync="syncDevice(drone.id)" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '~/types/devicesApi.types';
import { useDevicesGroup } from '~/composables/devices/useDevicesGroup';

const props = defineProps<{
  getDevices: DevicesAPI_GetDevices;
  getDevice: DevicesAPI_GetDevice;
}>();

const { devices, drones, loadDevices, syncDevice } = useDevicesGroup({
  getDevices: props.getDevices,
  getDevice: props.getDevice,
});

onMounted(async () => {
  await loadDevices();
});
</script>