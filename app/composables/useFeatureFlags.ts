const featureFlags = ref({
  showDevicesPage: true,
  showMissionsPage: false,
  showRoutesPage: false,
});

export function useFeatureFlags() {
  return {
    featureFlags,
  };
}
