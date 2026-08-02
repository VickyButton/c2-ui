import type { DevicesAPI_GetDevices } from './DevicesAPI.types';

export const getDevices: DevicesAPI_GetDevices = async () => {
  const api = useApiWithToken();

  return await api.get('devices');
};
