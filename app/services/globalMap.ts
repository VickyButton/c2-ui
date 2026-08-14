import type { GlobalCoordinates2D, GlobalMap, GlobalMapOptions } from '~/types/globalMap.types';
import { Feature, Map as MapOL, View } from 'ol';
import { TileJSON, Vector, XYZ } from 'ol/source';
import { useGeographic } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import { Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';

export class GlobalMapOL implements GlobalMap {
  private _map?: MapOL;
  private _markerLayer?: VectorLayer;
  private _mapTilesDefaultLayer?: TileLayer;
  private _mapTilesSatelliteLayer?: TileLayer;

  private get map() {
    invariant(this._map !== undefined, 'Map is not defined.');

    return this._map;
  }

  private get view() {
    return this.map.getView();
  }

  private get markerLayer() {
    invariant(this._markerLayer !== undefined, 'Marker layer is not defined.');

    return this._markerLayer;
  }

  private get mapTilesDefaultLayer() {
    invariant(this._mapTilesDefaultLayer !== undefined, 'Map tiles default layer is not defined.');

    return this._mapTilesDefaultLayer;
  }

  private get mapTilesSatelliteLayer() {
    invariant(this._mapTilesSatelliteLayer !== undefined, 'Map tiles satellite layer is not defined.');

    return this._mapTilesSatelliteLayer;
  }

  public get zoom() {
    const value = this.view.getZoom();

    invariant(value !== undefined, 'Zoom value is not defined.');

    return value;
  }

  public load(containerId: string, options: GlobalMapOptions) {
    // Allows GPS coordinates to be used.
    useGeographic();

    // Define map layers.
    this._mapTilesDefaultLayer = this.createMapTilesDefaultLayer(options.mapTilesDefaultApiUrl);
    this._mapTilesSatelliteLayer = this.createMapTilesSatelliteLayer(options.mapTilesSatelliteApiUrl);
    this._markerLayer = this.createMarkerLayer();

    // Define map view.
    const view = new View({
      center: [0, 0],
      zoom: 16,
      minZoom: options.minZoom,
      maxZoom: options.maxZoom,
    });

    // Initialize map and mount to container.
    this._map = new MapOL({
      target: containerId,
      layers: [this.mapTilesDefaultLayer, this.mapTilesSatelliteLayer, this.markerLayer],
      view,
      controls: [],
    });
  }

  private createMapTilesDefaultLayer(url: string) {
    const source = new XYZ({
      url,
    });

    return new TileLayer({
      source,
    });
  }

  private createMapTilesSatelliteLayer(url: string) {
    const source = new TileJSON({
      url,
      tileSize: 256,
      crossOrigin: 'anonymous',
    });

    return new TileLayer({
      source,
      visible: false,
    });
  }

  private createMarkerLayer() {
    const source = new Vector();

    return new VectorLayer({
      source,
    });
  }

  public setCenter({ latitude, longitude }: GlobalCoordinates2D) {
    this.view.setCenter([latitude, longitude]);
  }

  public setZoom(value: number) {
    this.view.setZoom(value);
  }

  public showDefaultMapTilesLayer() {
    this.mapTilesDefaultLayer.setVisible(true);
  }

  public hideDefaultMapTilesLayer() {
    this.mapTilesDefaultLayer.setVisible(false);
  }

  public showSatelliteMapTilesLayer() {
    this.mapTilesSatelliteLayer.setVisible(true);
  }

  public hideSatelliteMapTilesLayer() {
    this.mapTilesSatelliteLayer.setVisible(false);
  }

  public addIconMarker(id: string, src: string, coordinates: GlobalCoordinates2D) {
    const circle = this.createCircleFeature(coordinates, 20);
    const icon = this.createIconFeature(coordinates, src);
    const [circleId, iconId] = this.getIconMarkerIds(id);

    // Set IDs for features.
    circle.setId(circleId);
    icon.setId(iconId);

    // Retrieve vector source
    const source = this.markerLayer.getSource();

    // Assert that source is defined.
    invariant(source !== null, 'Marker layer vector source is not defined.');

    // Add features to vector source.
    source.addFeatures([circle, icon]);
  }

  private createIconFeature(center: GlobalCoordinates2D, src: string) {
    const feature = new Feature();
    const geometry = new Point([center.latitude, center.longitude]);
    const style = new Style({
      image: new Icon({
        src,
        scale: 0.5,
      }),
    });

    feature.setGeometry(geometry);
    feature.setStyle(style);

    return feature;
  }

  private createCircleFeature(center: GlobalCoordinates2D, radius: number) {
    const feature = new Feature();
    const geometry = new Point([center.latitude, center.longitude]);
    const style = new Style({
      image: new CircleStyle({
        radius,
        fill: new Fill({
          color: 'rgba(46, 71, 170, 0.4)',
        }),
        stroke: new Stroke({
          color: 'rgb(255, 255, 255)',
        }),
      }),
    });

    feature.setGeometry(geometry);
    feature.setStyle(style);

    return feature;
  }

  private getIconMarkerIds(id: string): [string, string] {
    return [`${id}-circle`, `${id}-icon`];
  }

  public removeIconMarker(id: string) {
    // Retrieve vector source
    const source = this.markerLayer.getSource();

    // Assert that source is defined.
    invariant(source !== null, 'Marker layer vector source is not defined.');

    // Retrieve features.
    const [circleId, iconId] = this.getIconMarkerIds(id);
    const circle = source.getFeatureById(circleId);
    const icon = source.getFeatureById(iconId);

    // Add features to vector source.
    source.removeFeatures([circle, icon]);
  }
}
