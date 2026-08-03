// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: false,
  },
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
      titleTemplate: '%s ▪ C2-UI',
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: '',
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint', '@nuxt/test-utils/module'],
});
