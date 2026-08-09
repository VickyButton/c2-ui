import type { API } from '~/types/api.types';
import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from '../types/DevicesAPI.types';

export class DevicesAPI {
  private readonly api: API;

  constructor(api: API) {
    this.api = api;
  }

  public getDevices: DevicesAPI_GetDevices = async () => {
    return await this.api.get('devices');
  };
  public getDevice: DevicesAPI_GetDevice = async (deviceId) => {
    return await this.api.get(`devices/${deviceId}`);
  };
}
