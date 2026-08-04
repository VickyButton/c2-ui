<template>
  <DevicesView :getDevices :getDevice />
</template>

<script setup lang="ts">
useHead({
  title: 'Devices',
});

definePageMeta({
  middleware: ['auth-guard'],
});

const getDevices = inject(DEVICES_API_GET_DEVICES_INJECTION_KEY);
const getDevice = inject(DEVICES_API_GET_DEVICE_INJECTION_KEY);

invariant(getDevices !== undefined, 'Devices API GetDevices method is not provided.');
invariant(getDevice !== undefined, 'Devices API GetDevice method is not provided.');
</script>