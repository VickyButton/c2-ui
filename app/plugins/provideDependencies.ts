/**
 * This plugin acts as a provider for dependencies used across the application.
 */
import { AuthAPI } from '~/services/AuthAPI';
import { DevicesAPI } from '~/services/DevicesAPI';
import { GlobalMapOL } from '~/services/GlobalMapOL';
import { storageMemory } from '~/services/StorageMemory';

export default defineNuxtPlugin({
  name: 'provide-dependencies',
  dependsOn: ['provide-api'],
  setup({ vueApp }) {
    const api = inject(API_INJECTION_KEY);

    invariant(api !== undefined, 'API is not provided.');

    /* Auth API */
    const authApi = new AuthAPI(api);

    vueApp.provide(AUTH_API_AUTH_INJECTION_KEY, authApi.auth);

    /* Devices API */
    const devicesApi = new DevicesAPI(api);

    vueApp.provide(DEVICES_API_GET_DEVICES_INJECTION_KEY, devicesApi.getDevices);
    vueApp.provide(DEVICES_API_GET_DEVICE_INJECTION_KEY, devicesApi.getDevice);

    /* Global Map */
    vueApp.provide(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY, GlobalMapOL);

    /* Storage */
    vueApp.provide(STORAGE_INJECTION_KEY, storageMemory);
  },
});
