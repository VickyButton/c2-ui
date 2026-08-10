import type { Device } from '~/types/devices.types';
import type { DevicesAPI_GetDevice } from '~/types/devicesApi.types';

export function useDevice(api: {
  getDevice: DevicesAPI_GetDevice;
}) {
  const device = ref<Device>();

  async function load(deviceId: string) {
    device.value = await api.getDevice(deviceId);
  }

  return {
    device,
    load,
  };
}
