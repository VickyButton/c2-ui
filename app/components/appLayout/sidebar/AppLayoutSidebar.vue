<template>
  <nav class="bg-secondary-600">
    <AppLayoutSidebarItemGroup>
      <AppLayoutSidebarItem to="/" label="DASHBOARD">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/dashboard.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/devices" label="DEVICES">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/drone.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/missions" label="MISSIONS">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/target.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
  </nav>
</template>