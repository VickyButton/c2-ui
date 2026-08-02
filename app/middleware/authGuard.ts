/**
 * This middleware redirects a user to the login page if not authenticated.
 */
export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated.value) {
    return navigateTo('/login');
  }
});
