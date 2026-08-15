import type { GlobalCoordinates2D, GlobalMap, GlobalMapOptions, MarkerOptions } from '~/types/globalMap.types';
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

  public addMarker(id: string, src: string, center: GlobalCoordinates2D, options?: MarkerOptions) {
    // Create feature for icon marker.
    const iconMarkerFeature = this.createIconMarkerFeature(center, src, {
      fillColor: options?.fillColor,
      strokeColor: options?.strokeColor,
    });

    // Give feature a unique ID.
    iconMarkerFeature.setId(id);

    // Retrieve vector source where feature will be added.
    const source = this.markerLayer.getSource();

    // Assert that vector source is defined.
    invariant(source !== null, 'Marker layer vector source is not defined.');

    // Add feature to vector source.
    source.addFeature(iconMarkerFeature);
  }

  private createIconMarkerFeature(center: GlobalCoordinates2D, src: string, options?: MarkerOptions) {
    const geometry = new Point([center.latitude, center.longitude]);
    const circleStyle = this.createCircleStyle(20, {
      fillColor: options?.fillColor,
      strokeColor: options?.strokeColor,
    });
    const iconStyle = this.createIconStyle(src);
    const feature = new Feature({
      geometry,
    });

    feature.setStyle([circleStyle, iconStyle]);

    return feature;
  }

  private createCircleStyle(radius: number, options?: {
    fillColor?: string;
    strokeColor?: string;
  }) {
    const image = new CircleStyle({
      radius,
    });

    if (options?.fillColor) {
      image.setFill(this.createFill(options.fillColor));
    }

    if (options?.strokeColor) {
      image.setStroke(this.createStroke(options.strokeColor));
    }

    return new Style({
      image,
    });
  }

  private createFill(color: string) {
    return new Fill({
      color,
    });
  }

  private createStroke(color: string) {
    return new Stroke({
      color,
    });
  }

  private createIconStyle(src: string) {
    return new Style({
      image: new Icon({
        src,
        scale: 0.5,
      }),
    });
  }

  public removeMarker(id: string) {
    // Retrieve vector source.
    const source = this.markerLayer.getSource();

    // Assert that source is defined.
    invariant(source !== null, 'Marker layer vector source is not defined.');

    // Retrieve icon marker feature.
    const feature = source.getFeatureById(id);

    // Add features to vector source.
    source.removeFeature(feature);
  }
}
