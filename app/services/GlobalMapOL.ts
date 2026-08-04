import type { GlobalMap } from '~/types/map.types';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useGeographic } from 'ol/proj';

export class GlobalMapOL implements GlobalMap {
  private _map?: Map;

  public load(containerId: string) {
    // Allows GPS coordinates to be used.
    useGeographic();

    // Initialize map and mount to container.
    this._map = new Map({
      target: containerId,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      controls: [],
    });
  }

  public setView(latitude: number, longitude: number) {
    this.view.setCenter([latitude, longitude]);
  }

  public setZoom(zoom: number) {
    this.view.setZoom(zoom);
  }

  private get map() {
    invariant(this._map !== undefined, 'Map is not defined.');

    return this._map;
  }

  private get view() {
    return this.map.getView();
  }
}
