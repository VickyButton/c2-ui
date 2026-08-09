/*
  This plugin is used to keep the API access token in sync with the access token saved locally.
*/
export default defineNuxtPlugin({
  name: 'restore-auth-data',
  dependsOn: ['provide-api', 'provide-storage'],
  setup() {
    const api = useApi();
    const { accessToken } = useAuth();

    api.accessToken = accessToken.value;
  },
});
