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

export interface MarkerOptions {
  fillColor?: string;
  strokeColor?: string;
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
  /** Shows the default map tiles layer. */
  showDefaultMapTilesLayer(): void;
  /** Hides the default map tiles layer. */
  hideDefaultMapTilesLayer(): void;
  /** Shows the satellite map tiles layer. */
  showSatelliteMapTilesLayer(): void;
  /** Shows the satellite map tiles layer. */
  hideSatelliteMapTilesLayer(): void;
  /** Adds a marker to the map. */
  addMarker(id: string, src: string, center: GlobalCoordinates2D, options?: MarkerOptions): void;
  /** Removes a marker from the map. */
  removeMarker(id: string): void;
}

export interface GlobalMapOptions {
  mapTilesDefaultApiUrl: string;
  mapTilesSatelliteApiUrl: string;
  maxZoom: number;
  minZoom: number;
}

export type GlobalMapConstructor = new () => GlobalMap;
