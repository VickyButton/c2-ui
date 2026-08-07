/**
 * This plugin injects dependencies for use across the application.
 */
import { auth } from '~/services/AuthAPI';
import { getDevice, getDevices } from '~/services/DevicesAPI';
import { GlobalMapOL } from '~/services/GlobalMapOL';
import { storageMemory } from '~/services/StorageMemory';

export default defineNuxtPlugin(({ vueApp }) => {
  /* Auth API */
  vueApp.provide(AUTH_API_AUTH_INJECTION_KEY, auth);

  /* Devices API */
  vueApp.provide(DEVICES_API_GET_DEVICES_INJECTION_KEY, getDevices);
  vueApp.provide(DEVICES_API_GET_DEVICE_INJECTION_KEY, getDevice);

  /* Global Map */
  vueApp.provide(GLOBAL_MAP_CONSTRUCTOR_INJECTION_KEY, GlobalMapOL);

  /* Storage */
  vueApp.provide(STORAGE_INJECTION_KEY, storageMemory);
});
