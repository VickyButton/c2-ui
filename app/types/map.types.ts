export interface GlobalCoordinates2D {
  /** The position latitude in decimal degrees. */
  latitude: number;
  /** The position longitude in decimal degrees. */
  longitude: number;
}

export interface GlobalCoordinates3D extends GlobalCoordinates2D {
  /** The position altitude in meters, relative to sea level. */
  altitude: number;
}

export interface GlobalMap {
  /** The current zoom value of the map view. */
  readonly zoom: number;
  /** Loads the map and mounts it to specified container. */
  load(containerId: string, options?: GlobalMapOptions): void;
  /** Sets the current coordinates at which the map view is centered at. */
  setCenter(value: GlobalCoordinates2D): void;
  /** Sets the current zoom level at which the map is viewed at. */
  setZoom(value: number): void;
  /** Adds an icon marker at specified coordinates. */
  addIconMarker(id: string, src: string, coordinates: GlobalCoordinates2D): void;
  /** Removes an icon marker. */
  removeIconMarker(id: string): void;
}

export interface GlobalMapOptions {
  maxZoom: number;
  minZoom: number;
}
