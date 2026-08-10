<template>
  <nav class="flex flex-col bg-secondary-600">
    <AppLayoutSidebarItemGroup class="border-b">
      <header>
        <NuxtLink to="/">
          <div class="flex flex-row gap-x-2 p-2">
            <BrandLogo size="sm" />
            <h2>C2_UI</h2>
          </div>
        </NuxtLink>
      </header>
    </AppLayoutSidebarItemGroup>
    <AppLayoutSidebarItemGroup>
      <AppLayoutSidebarItem to="/dashboard" label="DASHBOARD">
        <AppLayoutSidebarItemIcon name="dashboard" />
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem v-if="featureFlags.showDevicesPage" to="/devices" label="DEVICES">
        <AppLayoutSidebarItemIcon name="drone" />
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem v-if="featureFlags.showRoutesPage" to="/routes" label="ROUTES">
        <AppLayoutSidebarItemIcon name="route" />
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem v-if="featureFlags.showMissionsPage" to="/missions" label="MISSIONS">
        <AppLayoutSidebarItemIcon name="flag" />
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
    <AppLayoutSidebarItemGroup class="border-t mt-auto">
      <AppLayoutSidebarItem to="/settings" label="SETTINGS">
        <AppLayoutSidebarItemIcon name="cog" />
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/logout" label="LOGOUT">
        <AppLayoutSidebarItemIcon name="exit" />
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
  </nav>
</template>

<script setup lang="ts">
const { featureFlags } = useFeatureFlags();
</script>