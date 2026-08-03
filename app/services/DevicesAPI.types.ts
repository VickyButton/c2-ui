import type { Device } from '~/types/devices';

export type DevicesAPI_GetDevices = () => Promise<Device[]>;
export type DevicesAPI_SyncDevice = (deviceId: string) => Promise<Device>;
