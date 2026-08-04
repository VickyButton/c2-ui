<template>
  <div :class="{
    'w-8 h-8': size === 'sm',
    'w-12 h-12': size === 'md',
    'w-16 h-16': size === 'lg',
    }">
    <img :src :alt />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  name: string;
  size?: 'sm' | 'md' | 'lg';
}>(), {
  size: 'md',
});

const { getIcon } = useIcon();
const icon = computed(() => getIcon(props.name));
const src = computed(() => icon.value.src);
const alt = computed(() => icon.value.alt);
</script>