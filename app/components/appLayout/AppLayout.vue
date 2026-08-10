<template>
  <div class="flex flex-col w-screen h-screen">
    <div class="flex flex-row grow">
      <AppLayoutSidebar class="shrink-0 w-[200px] border-r" />
      <main class="grow">
        <slot />
      </main>
    </div>
  </div>
</template>