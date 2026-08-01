<template>
  <nav class="bg-secondary-600">
    <AppLayoutSidebarItemGroup>
      <AppLayoutSidebarItem to="/devices" label="Devices">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/drone.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/missions" label="Missions">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/target.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
  </nav>
</template>