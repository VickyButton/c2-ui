const AUTH_STORAGE_KEY = 'auth-storage';

export function useAuth() {
  const { get, set } = useStorage();
  const accessToken = ref(get(AUTH_STORAGE_KEY));
  const isAuthenticated = computed(() => accessToken.value !== null);
  const api = useApi();

  function setAccessToken(value: string | null) {
    // Update access token ref for reactivity.
    accessToken.value = value;

    // Update API with access token for authenticating API requests.
    api.accessToken = value;

    // Store access token in memory.
    set(AUTH_STORAGE_KEY, value);
  }

  return {
    accessToken,
    isAuthenticated,
    setAccessToken,
  };
}
