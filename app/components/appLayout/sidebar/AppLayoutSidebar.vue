<template>
  <nav class="flex flex-col bg-secondary-600">
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