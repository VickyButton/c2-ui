<template>
  <AppLayoutPage title="SETTINGS">
    <div class="flex flex-col w-full max-w-[400px]">
      <SettingsFeatureFlagsCard v-if="showDevSettings" />
    </div>
  </AppLayoutPage>
</template>

<script setup lang="ts">
const showDevSettings = isDevEnvironment();
</script>