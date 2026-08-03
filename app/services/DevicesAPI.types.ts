interface BaseDevice {
  id: string;
  nickname?: string;
}

interface Drone extends BaseDevice {
  type: 'drone';
  status: 'offline' | 'standby' | 'active';
}

type Device = Drone;

export type DevicesAPI_GetDevices = () => Promise<Device[]>;
