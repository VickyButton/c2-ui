<template>
  <div class="flex flex-col gap-y-4">
    <p v-if="devices.length === 0">No devices registered.</p>
    <DevicesSection v-if="drones.length > 0" title="DRONES">
      <BaseGroup class="grid-cols-3">
        <BaseGroupItem v-for="drone in drones">
          <DroneInformationCard :drone @sync="syncDevice(drone.id)" />
        </BaseGroupItem>
      </BaseGroup>
    </DevicesSection>
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