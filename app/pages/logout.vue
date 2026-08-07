<template>
  <LogoutView />
</template>

<script setup lang="ts">
useHead({
  title: 'Logged out',
})

definePageMeta({
  layout: 'single-card-layout',
  middleware: ['auth-guard'],
})

const { setAccessToken } = useAuth();

onMounted(() => {
  setAccessToken(null);

  setTimeout(() => {
    navigateTo('/login');
  }, 5000);
});
</script>