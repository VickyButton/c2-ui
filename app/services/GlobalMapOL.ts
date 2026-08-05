import type { GlobalCoordinates2D, GlobalMap } from '~/types/map.types';
import { Map, View } from 'ol';
import { XYZ } from 'ol/source';
import { useGeographic } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';

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
          source: new XYZ({
            url: 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 16,
      }),
      controls: [],
    });
  }

  public setCenter({ latitude, longitude }: GlobalCoordinates2D) {
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
