import { describe, expect, it, vi } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import DroneInformationCard from '../drone/information/DroneInformationCard.vue';
import Devices from './Devices.vue';

const getDevice = vi.fn();
const getDevices = vi.fn();

describe('Devices', () => {
  it.each([
    {
      type: 'drone',
      component: DroneInformationCard,
    },
  ])('presents $type devices using $component', async ({ type, component }) => {
    getDevices.mockResolvedValueOnce([
      {
        id: '123',
        type,
      },
    ]);

    const wrapper = await mountSuspended(Devices, {
      global: {
        stubs: {
          DroneInformationCard: true,
        },
      },
      props: {
        getDevice,
        getDevices,
      },
    });

    expect(wrapper.findComponent(component).exists()).toBe(true);
  });
});
