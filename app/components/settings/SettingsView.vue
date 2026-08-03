<template>
  <AppLayoutPage title="SETTINGS">
    <div class="flex flex-col w-full max-w-[400px]">
      <section>
        <SettingsFeatureFlagsCard v-if="showDevSettings" />
      </section>
    </div>
  </AppLayoutPage>
</template>

<script setup lang="ts">
const showDevSettings = isDevEnvironment();
</script>