<template>
  <LoginCard :auth class="aspect-square" @login="onLogin" />
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'login', accessToken: string): void;
}>();

defineProps<{
  auth: (data: {
    username: string;
    password: string;
  }) => Promise<{
    accessToken: string;
  }>;
}>();

function onLogin(accessToken: string) {
  emit('login', accessToken);
}
</script>