<template>
  <section>
    <fieldset>
      <legend>Toggle feature flags:</legend>
      <div class="flex flex-row gap-x-2">
        <input id="showDevicesPage" type="checkbox" name="showDevicesPage" v-model="featureFlags.showDevicesPage" />
        <label for="showDevicesPage">Show Devices page</label>
      </div>
      <div class="flex flex-row gap-x-2">
        <input id="showMissionsPage" type="checkbox" name="showMissionsPage" v-model="featureFlags.showMissionsPage" />
        <label for="showMissionsPage">Show Missions page</label>
      </div>
      <div class="flex flex-row gap-x-2">
        <input id="showRoutesPage" type="checkbox" name="showRoutesPage" v-model="featureFlags.showRoutesPage" />
        <label for="showRoutesPage">Show Routes page</label>
      </div>
    </fieldset>
  </section>
</template>

<script setup lang="ts">
const { featureFlags } = useFeatureFlags();
</script>