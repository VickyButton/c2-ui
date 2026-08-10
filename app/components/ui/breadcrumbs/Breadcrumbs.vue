<template>
  <nav aria-label="Breadcrumb" class="flex flex-row">
    <ol class="flex flex-row gap-x-2">
      <li v-for="(breadcrumb, index) in breadcrumbs" :aria-current="isCurrentPage(index) ? 'page' : undefined" class="flex flex-row gap-x-2">
        <div class="flex flex-row items-center gap-x-2">
          <h1 v-if="isCurrentPage(index)">{{ breadcrumb.label }}</h1>
          <template v-else>
            <NuxtLink tabindex="0" :to="breadcrumb.path" class="text-2xl text-primary-700" :class="{
              'hover:underline hover:text-primary-500': breadcrumb.path !== undefined
              }">{{ breadcrumb.label }}</NuxtLink>
            <BaseIcon name="arrow-right" size="xs" />
          </template>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '~/types/breadcrumbs.types';

const props = defineProps<{
  breadcrumbs: Breadcrumb[];
}>();

function isCurrentPage(index: number) {
  return index === props.breadcrumbs.length - 1;
}
</script>