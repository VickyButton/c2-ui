import type { DevicesAPI_GetDevices } from './DevicesAPI.types';

export const getDevices: DevicesAPI_GetDevices = async () => {
  const api = useApi();

  return await api.get('devices');
};
