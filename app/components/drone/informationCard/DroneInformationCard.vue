<template>
  <BaseCard>
    <BaseCardHeader>
      <div class="flex flex-row items-center gap-x-2">
        <BaseIcon size="sm">
          <img src="~/assets/icons/drone.png" />
        </BaseIcon>
        <BaseCardTitle>{{ title }}</BaseCardTitle>
        <DroneStatusBadge :status="drone.status" class="ml-auto" />
      </div>
    </BaseCardHeader>
    <BaseCardActions>
      <BaseCardAction>
        <BaseButtonPrimary class="w-full" @click="view">VIEW</BaseButtonPrimary>
      </BaseCardAction>
      <BaseCardAction>
        <BaseButtonPrimary class="w-full" @click="sync">SYNC STATUS</BaseButtonPrimary>
      </BaseCardAction>
    </BaseCardActions>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Drone } from '~/types/devices.types';

const emit = defineEmits<{
  (e: 'view'): void;
  (e: 'sync'): void;
}>();

const props = defineProps<{
  drone: Drone;
}>();

const title = computed(() => props.drone.nickname ?? `DRONE ${props.drone.id}`);

function view() {
  emit('view');
}

function sync() {
  emit('sync');
}
</script>