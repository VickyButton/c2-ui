import type { GlobalMap } from '~/types/map.types';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';

export class GlobalMapOL implements GlobalMap {
  private readonly map: Map;

  constructor(containerId: string) {
    this.map = new Map({
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
    });
  }

  public setView(latitude: number, longitude: number) {
    this.map.setView(new View({
      center: [latitude, longitude],
    }));
  }

  public setZoom(zoom: number) {
    const currentView = this.map.getView();
    const center = currentView.getCenter();

    this.map.setView(new View({
      center,
      zoom,
    }));
  }
}
