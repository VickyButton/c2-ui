import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Icon from '../ui/icon/Icon.vue';
import DroneBatteryIcon from './DroneBatteryIcon.vue';

describe('DroneBatteryIcon', () => {
  it.each([
    {
      battery: 100,
      name: 'battery-full',
    },
    {
      battery: 75,
      name: 'battery-healthy',
    },
    {
      battery: 50,
      name: 'battery-half',
    },
    {
      battery: 25,
      name: 'battery-low',
    },
    {
      battery: 5,
      name: 'battery-empty',
    },
  ])('presents $name icon when battery is at $battery%', async ({ battery, name }) => {
    const wrapper = await mountSuspended(DroneBatteryIcon, {
      props: {
        battery,
      },
    });

    const icon = wrapper.getComponent(Icon);
    expect(icon.props()).toEqual({
      name,
      size: 'md',
    });
  });
});
