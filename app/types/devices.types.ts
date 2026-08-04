import type { GlobalCoordinates } from './map.types';

interface BaseDevice {
  id: string;
  nickname?: string;
}

export type DroneStatus = 'offline' | 'standby' | 'active';
export interface Drone extends BaseDevice {
  type: 'drone';
  /** The status of the drone. */
  status: DroneStatus;
  /** The last-recorded coordinates of the drone. */
  lastCoordinates: GlobalCoordinates;
}

export type Device = Drone;
