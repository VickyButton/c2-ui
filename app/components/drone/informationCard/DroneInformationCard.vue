<template>
  <BaseCard>
    <BaseCardHeader>
      <div class="flex flex-row items-center gap-x-2">
        <BaseIcon name="drone" size="sm" class="shrink-0" />
        <BaseCardTitle class="truncate">{{ title }}</BaseCardTitle>
        <div class="flex gap-x-2 ml-auto">
          <DroneStatusBadge :status="drone.status" />
          <DroneBatteryIcon :battery="drone.battery" size="sm" class="shrink-0" />
        </div>
      </div>
    </BaseCardHeader>
    <BaseCardContent class="gap-y-2">
      <div>
        <p>Last pinged location:</p>
        <dl class="grid grid-cols-2">
          <div class="flex flex-row gap-x-1">
            <dt class="font-bold">Latitude:</dt>
            <dd>{{ drone.coordinates.latitude }}</dd>
          </div>
          <div class="flex flex-row gap-x-1">
            <dt class="font-bold">Longitude:</dt>
            <dd>{{ drone.coordinates.longitude }}</dd>
          </div>
        </dl>
      </div>
      <DronePositionMap :droneId="drone.id" :droneCoordinates="drone.coordinates" class="h-60 border bg-white" />
    </BaseCardContent>
    <BaseCardActions>
      <BaseCardAction>
        <BaseButtonPrimary class="w-full" @click="view">VIEW</BaseButtonPrimary>
      </BaseCardAction>
      <BaseCardAction>
        <BaseButtonPrimary class="w-full" @click="sync">SYNC</BaseButtonPrimary>
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