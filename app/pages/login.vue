<template>
  <LoginView :auth />
</template>

<script setup lang="ts">
const auth = inject(AUTH_API_AUTH_INJECTION_KEY);

invariant(auth !== undefined, 'Auth API Auth method is not provided.');
</script>