export function useApi() {
  const api = inject(API_INJECTION_KEY);

  invariant(api !== undefined, 'API is not provided.');

  return api;
}
