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
  private _mapTilesSatteliteLayer?: TileLayer;

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

  private get mapTilesSatteliteLayer() {
    invariant(this._mapTilesSatteliteLayer !== undefined, 'Map tiles sattelite layer is not defined.');

    return this._mapTilesSatteliteLayer;
  }

  public get zoom() {
    const value = this.view.getZoom();

    invariant(value !== undefined, 'Zoom value is not defined.');

    return value;
  }

  public load(containerId: string, options: GlobalMapOptions) {
    // Allows GPS coordinates to be used.
    useGeographic();

    // Define map tiles sources.
    const mapTilesDefaultSource = this.createMapTilesDefaultSource(options.mapTilesDefaultApiUrl);
    const mapTilesSatteliteSource = this.createMapTilesSatteliteSource(options.mapTilesSatteliteApiUrl);

    // Define map tiles layers.
    this._mapTilesDefaultLayer = new TileLayer({
      source: mapTilesDefaultSource,
    });
    this._mapTilesSatteliteLayer = new TileLayer({
      source: mapTilesSatteliteSource,
      visible: false,
    });

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
      layers: [this.mapTilesDefaultLayer, this.mapTilesSatteliteLayer],
      view,
      controls: [],
    });

    // Create vector layer for markers.
    const markerSource = new Vector();
    const markerLayer = new VectorLayer({
      source: markerSource,
    });

    // Add vector layer to map.
    this.map.addLayer(markerLayer);

    // Save reference to layer for use later.
    this._markerLayer = markerLayer;
  }

  private createMapTilesDefaultSource(url: string) {
    return new XYZ({
      url,
    });
  }

  private createMapTilesSatteliteSource(url: string) {
    return new TileJSON({
      url,
      tileSize: 256,
      crossOrigin: 'anonymous',
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

  public showSatteliteMapTilesLayer() {
    this.mapTilesSatteliteLayer.setVisible(true);
  }

  public hideSatteliteMapTilesLayer() {
    this.mapTilesSatteliteLayer.setVisible(false);
  }

  public addIconMarker(id: string, src: string, coordinates: GlobalCoordinates2D) {
    const circle = this.createCircleFeature(coordinates, 20);
    const icon = this.createIconFeature(coordinates, 'icons/drone.png');

    // Set IDs for features.
    circle.setId(`${id}-circle`);
    icon.setId(`${id}-icon`);

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

  public removeIconMarker(id: string) {
    // Retrieve vector source
    const source = this.markerLayer.getSource();

    // Assert that source is defined.
    invariant(source !== null, 'Marker layer vector source is not defined.');

    // Retrieve features.
    const circle = source.getFeatureById(`${id}-circle`);
    const icon = source.getFeatureById(`${id}-icon`);

    // Add features to vector source.
    source.removeFeatures([circle, icon]);
  }
}
