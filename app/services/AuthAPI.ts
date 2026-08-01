import type { AuthAPI_Auth } from './AuthAPI.types';

export const auth: AuthAPI_Auth = async (data) => {
  const api = useApi();

  return await api.post('auth', data);
};
