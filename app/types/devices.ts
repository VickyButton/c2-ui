interface BaseDevice {
  id: string;
  nickname?: string;
}

export type DroneStatus = 'offline' | 'standby' | 'active';
export interface Drone extends BaseDevice {
  type: 'drone';
  status: DroneStatus;
}

export type Device = Drone;
