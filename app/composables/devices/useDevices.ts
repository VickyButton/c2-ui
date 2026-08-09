import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '~/types/devicesApi.types';
import type { Device } from '~/types/devices.types';

function toMap(devicesArray: Device[]) {
  return new Map(devicesArray.map((device) => ([device.id, device])));
}

function toArray(devicesMap: Map<string, Device>) {
  return Array.from(devicesMap.values());
}

export function useDevices(api: {
  getDevices: DevicesAPI_GetDevices;
  getDevice: DevicesAPI_GetDevice;
}) {
  const devicesMap = ref(toMap([]));
  const devicesArray = computed(() => toArray(devicesMap.value));
  const drones = computed(() => devicesArray.value.filter(({ type }) => type === 'drone'));

  async function loadDevices() {
    const devices = await api.getDevices();

    devicesMap.value = toMap(devices);
  }

  async function syncDevice(deviceId: string) {
    const updated = await api.getDevice(deviceId);

    devicesMap.value.set(deviceId, updated);
  }

  return {
    devices: devicesArray,
    drones,
    loadDevices,
    syncDevice,
  };
}
