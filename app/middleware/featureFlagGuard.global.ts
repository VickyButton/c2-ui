export default defineNuxtRouteMiddleware((to) => {
  const { featureFlags } = useFeatureFlags();

  if (to.path === '/devices' && !featureFlags.value.showDevicesPage) {
    return navigateTo('/dashboard');
  }

  if (to.path === '/missions' && !featureFlags.value.showMissionsPage) {
    return navigateTo('/dashboard');
  }

  if (to.path === '/routes' && !featureFlags.value.showRoutesPage) {
    return navigateTo('/dashboard');
  }
});
