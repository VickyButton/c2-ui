export default defineNuxtPlugin({
  name: 'provide-config',
  setup({ vueApp }) {
    const runtimeConfig = useRuntimeConfig();

    vueApp.provide(CONFIG_INJECTION_KEY, {
      apiBaseUrl: runtimeConfig.public.apiBaseUrl,
      mapTilesDefaultApiUrl: runtimeConfig.public.mapTilesDefaultApiUrl,
      mapTilesSatteliteApiUrl: runtimeConfig.public.mapTilesSatteliteApiUrl,
    });
  },
});
