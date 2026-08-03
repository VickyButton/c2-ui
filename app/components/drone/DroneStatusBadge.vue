<template>
  <BaseBadge :label :variant />
</template>

<script setup lang="ts">
import type { DroneStatus } from '~/types/devices';

const props = defineProps<{
  status: DroneStatus;
}>();

const label = computed(() => {
  switch(props.status) {
    case 'offline':
      return 'OFFLINE';
    case 'standby':
      return 'STANDBY';
    case 'active':
      return 'ACTIVE';
    default:
      return 'ERROR';
  }
});
const variant = computed(() => {
  switch(props.status) {
    case 'offline':
      return 'neutral';
    case 'standby':
      return 'warning';
    case 'active':
      return 'success';
    default:
      return 'danger';
  }
})
</script>