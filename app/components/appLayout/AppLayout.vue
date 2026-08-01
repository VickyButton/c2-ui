<template>
  <div class="flex flex-col w-screen h-screen">
    <AppLayoutUtilityBar />
    <div class="flex flex-row grow">
      <AppLayoutSidebar class="grow max-w-[200px] border-r" />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>