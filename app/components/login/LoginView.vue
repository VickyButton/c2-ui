<template>
  <LoginCard :auth class="aspect-square" @login="onLogin" />
</template>

<script setup lang="ts">
import type { AuthAPI_Auth } from '~/services/AuthAPI.types';

const emit = defineEmits<{
  (e: 'login', accessToken: string): void;
}>();

defineProps<{
  auth: AuthAPI_Auth;
}>();

function onLogin(accessToken: string) {
  emit('login', accessToken);
}
</script>