import type { Device } from '~/types/devices.types';

function getDefaultDeviceName(device: Device) {
  switch (device.type) {
    case 'drone':
      return `DRONE ${device.id}`;
    default:
      return `DEVICE ${device.id}`;
  }
}

export function useDeviceName(device: Device) {
  return device.nickname || getDefaultDeviceName(device);
}
