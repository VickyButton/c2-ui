<template>
  <BaseIcon :name :title />
</template>

<script setup lang="ts">
const props = defineProps<{
  battery: number;
}>();

const title = computed(() => `${props.battery}%`)
const name = computed(() => {
  /*
    Battery States:
    - Full      battery >= 75%
    - Healthy   battery >= 50%
    - Half      battery >= 25%
    - Low       battery >= 10%
    - Empty     battery < 10%
  */
  if (props.battery >= 75) {
    return 'battery-full';
  } else if (props.battery >= 50) {
    return 'battery-healthy';
  } else if (props.battery >= 25) {
    return 'battery-half';
  } else if (props.battery >= 10) {
    return 'battery-low';
  } else {
    return 'battery-empty';
  }
});
</script>