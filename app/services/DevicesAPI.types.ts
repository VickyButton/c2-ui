interface BaseDeviceInformation {
  id: string;
  nickname?: string;
}

interface DroneInformation extends BaseDeviceInformation {
  type: 'drone';
  status: 'offline' | 'standby' | 'active';
}

type DeviceInformation = DroneInformation;

export type DevicesAPI_GetDevices = () => Promise<DeviceInformation[]>;
