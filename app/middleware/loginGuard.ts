/**
 * This middleware redirects an authenticated user to the dashboard if they try to access the login
 * page.
 */
export default defineNuxtRouteMiddleware((to) => {
  const { isAuthenticated } = useAuth();

  if (to.path === '/login' && isAuthenticated.value) {
    return navigateTo('/dashboard');
  }
});
