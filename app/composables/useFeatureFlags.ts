const featureFlags = ref({
  showDevicesPage: false,
  showMissionsPage: false,
  showRoutesPage: false,
});

export function useFeatureFlags() {
  return {
    featureFlags,
  };
}
