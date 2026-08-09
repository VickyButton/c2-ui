import type { API } from '~/types/api.types';
import type { AuthAPI_Auth } from './AuthAPI.types';

export class AuthAPI {
  private readonly api: API;

  constructor(api: API) {
    this.api = api;
  }

  public auth: AuthAPI_Auth = async (data) => {
    return await this.api.post('auth', data);
  };
}
