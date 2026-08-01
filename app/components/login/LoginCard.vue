<template>
  <BaseCard>
    <BaseCardContent>
      <LoginForm @submit="onSubmit" />
    </BaseCardContent>
  </BaseCard>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'login', accessToken: string): void;
}>();

const props = defineProps<{
  auth: (data: {
    username: string;
    password: string;
  }) => Promise<{
    accessToken: string;
  }>;
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