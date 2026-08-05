export interface GlobalCoordinates {
  /** The position latitude in decimal degrees. */
  latitude: number;
  /** The position longitude in decimal degrees. */
  longitude: number;
  /** The position altitude in meters, relative to sea level. */
  altitude: number;
}

export interface GlobalMap {
  /** Loads the map and mounts it to specified container. */
  load(containerId: string): void;
  /** Sets the current coordinates at which the map view is centered at. */
  setCenter(latitude: number, longitude: number): void;
  /** Sets the current zoom level at which the map is viewed at. */
  setZoom(zoom: number): void;
}
