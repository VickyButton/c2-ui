/**
 * This plugin injects dependencies for use across the application.
 */
import { auth } from '~/services/AuthAPI';

export default defineNuxtPlugin(({ vueApp }) => {
  /* Auth API */
  vueApp.provide(AUTH_API_AUTH_INJECTION_KEY, auth);
});
