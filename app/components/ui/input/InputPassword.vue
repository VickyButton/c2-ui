<template>
	<input type="password" v-model="model">
</template>

<script setup lang="ts">
const model = defineModel<string>();
</script>