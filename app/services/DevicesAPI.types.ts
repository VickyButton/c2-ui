import type { Device } from '~/types/devices';

export type DevicesAPI_GetDevices = () => Promise<Device[]>;
export type DevicesAPI_GetDevice = (deviceId: string) => Promise<Device>;
