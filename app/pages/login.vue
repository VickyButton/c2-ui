<template>
  <LoginView :auth @login="onLogin"/>
</template>

<script setup lang="ts">
useHead({
  title: 'Login',
})

definePageMeta({
  layout: 'single-card-layout',
  middleware: ['login-guard'],
})

const auth = inject(AUTH_API_AUTH_INJECTION_KEY);

invariant(auth !== undefined, 'Auth API Auth method is not provided.');

const { accessToken } = useAuth();

function onLogin(_accessToken: string) {
  // Set access token.
  accessToken.value = _accessToken;

  // Navigate to dashboard.
  navigateTo('/dashboard');
}
</script>