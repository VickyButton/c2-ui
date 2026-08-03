interface BaseDeviceInformation {
  id: string;
  nickname?: string;
}

export type DroneStatus = 'offline' | 'standby' | 'active';
export interface DroneInformation extends BaseDeviceInformation {
  type: 'drone';
  status: DroneStatus;
}

export type DeviceInformation = DroneInformation;
