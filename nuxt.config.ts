// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false,
  },
  ssr: false,
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components/ui',
      prefix: 'Base',
    },
    '~/components',
  ],
  app: {
    head: {
      titleTemplate: '%s ▪ C2_UI',
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: '',
      mapTilesDefaultApiUrl: '',
      mapTilesSatelliteApiUrl: '',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/test-utils/module'],
});
