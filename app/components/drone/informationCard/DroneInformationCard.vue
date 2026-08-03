<template>
  <BaseCard>
    <BaseCardHeader>
      <div class="flex flex-row items-center gap-x-2">
        <BaseIcon size="sm">
          <img src="~/assets/icons/drone.png" />
        </BaseIcon>
        <BaseCardTitle>{{ title }}</BaseCardTitle>
        <DroneStatusBadge :status="droneInformation.status" class="ml-auto" />
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
import type { DroneInformation } from '~/types/devices';

const emit = defineEmits<{
  (e: 'view'): void;
  (e: 'sync'): void;
}>();

const props = defineProps<{
  droneInformation: DroneInformation;
}>();

const title = computed(() => props.droneInformation.nickname ?? `DRONE ${props.droneInformation.id}`);

function view() {
  emit('view');
}

function sync() {
  emit('sync');
}
</script>