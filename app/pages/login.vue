<template>
  <LoginView :auth @login="onLogin"/>
</template>

<script setup lang="ts">
useHead({
  title: 'Login',
})

const auth = inject(AUTH_API_AUTH_INJECTION_KEY);

invariant(auth !== undefined, 'Auth API Auth method is not provided.');

const api = useApi();

function onLogin(accessToken: string) {
  // Set access token.
  api.setAccessToken(accessToken);

  // Navigate home.
  navigateTo('/');
}
</script>