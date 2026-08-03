import type { DevicesAPI_GetDevice, DevicesAPI_GetDevices } from './DevicesAPI.types';

export const getDevices: DevicesAPI_GetDevices = async () => {
  const api = useApiWithToken();

  return await api.get('devices');
};

export const getDevice: DevicesAPI_GetDevice = async (deviceId) => {
  const api = useApiWithToken();

  return await api.get(`devices/${deviceId}`);
};
