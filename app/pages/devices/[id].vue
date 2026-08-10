<template>
  <DeviceView :breadcrumbs :device />
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth-guard'],
});

const getDevice = inject(DEVICES_API_GET_DEVICE_INJECTION_KEY);

invariant(getDevice !== undefined, 'Devices API GetDevice method is not provided.');

const { device, load } = useDevice({
  getDevice,
});
const deviceName = computed(() => device.value ? useDeviceName(device.value) : 'DEVICE');

const route = useRoute();
const deviceId = route.params.id;

invariant(typeof deviceId === 'string', 'Device ID is not provided.');

onMounted(async () => {
  await load(deviceId);
});

const breadcrumbs = computed(() => [
  {
    label: 'DEVICES',
    path: '/devices',
  },
  {
    label: deviceName.value,
  },
]);

useHead({
  title: () => deviceName.value,
});
</script>