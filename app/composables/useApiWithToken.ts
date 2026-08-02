export function useApiWithToken() {
  const { accessToken } = useAuth();

  return useApi(accessToken.value ?? undefined);
}
