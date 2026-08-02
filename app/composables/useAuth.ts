const accessToken = ref<string | null>(null);

export function useAuth() {
  const isAuthenticated = computed(() => accessToken.value !== null);

  return {
    accessToken,
    isAuthenticated,
  };
}
