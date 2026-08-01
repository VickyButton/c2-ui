<template>
  <input type="text" v-model="model" />
</template>

<script setup lang="ts">
const model = defineModel<string>();
</script>