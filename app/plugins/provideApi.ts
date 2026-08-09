/*
  This plugin acts as a provider for the based API used in the application.
*/
import { APIFetch } from '~/services/APIFetch';

export default defineNuxtPlugin({
  name: 'provide-api',
  setup({ vueApp }) {
    const runtimeConfig = useRuntimeConfig();
    const api = new APIFetch(runtimeConfig.public.apiBaseUrl);

    vueApp.provide(API_INJECTION_KEY, api);
  },
});
