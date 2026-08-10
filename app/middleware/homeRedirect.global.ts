/**
 * This middleware defines the home page and redirects the user to it.
 */
export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/dashboard');
  }
});
