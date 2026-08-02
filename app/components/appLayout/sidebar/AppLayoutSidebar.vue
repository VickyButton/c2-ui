<template>
  <nav class="flex flex-col justify-between bg-secondary-600">
    <AppLayoutSidebarItemGroup>
      <AppLayoutSidebarItem to="/dashboard" label="DASHBOARD">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/dashboard.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/devices" label="DEVICES">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/drone.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/routes" label="ROUTES">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/route.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/missions" label="MISSIONS">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/target.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
    <AppLayoutSidebarItemGroup class="border-t">
      <AppLayoutSidebarItem to="/settings" label="SETTINGS">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/cog.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
      <AppLayoutSidebarItem to="/logout" label="LOGOUT">
        <AppLayoutSidebarItemIcon>
          <img src="~/assets/icons/exit.png" />
        </AppLayoutSidebarItemIcon>
      </AppLayoutSidebarItem>
    </AppLayoutSidebarItemGroup>
  </nav>
</template>