<template>
  <BaseCard>
    <BaseCardContent>
      <LoginForm @submit="onSubmit" />
    </BaseCardContent>
  </BaseCard>
</template>

<script setup lang="ts">
import type { AuthAPI_Auth } from '~/types/AuthAPI.types';

const emit = defineEmits<{
  (e: 'login', accessToken: string): void;
}>();

const props = defineProps<{
  auth: AuthAPI_Auth;
}>();

async function onSubmit(data: {
  username: string;
  password: string;
}) {
  try {
    const response = await props.auth(data);

    emit('login', response.accessToken);
  } catch {
    // TODO: Implement error handling.
  }
}
</script>