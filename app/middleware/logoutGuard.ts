/**
 * This middleware redirects an unauthenticated user to the login page if they try to access the
 * logout page.
 */
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  if (to.path === '/logout' && !isAuthenticated.value) {
    return navigateTo('/login');
  }
});
