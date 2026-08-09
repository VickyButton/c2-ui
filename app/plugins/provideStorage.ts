/*
  This plugin acts as a provider for the storage used in the application.
*/
import { StorageMemory } from '~/services/StorageMemory';

export default defineNuxtPlugin({
  name: 'provide-storage',
  setup({ vueApp }) {
    const storage = new StorageMemory();

    vueApp.provide(STORAGE_INJECTION_KEY, storage);
  },
});
