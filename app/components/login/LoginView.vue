<template>
  <LoginCard :auth class="aspect-square" />
</template>

<script setup lang="ts">
defineProps<{
  auth: (data: {
    username: string;
    password: string;
  }) => Promise<{
    accessToken: string;
  }>;
}>();
</script>