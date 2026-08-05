import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import DroneInformationCard from './DroneInformationCard.vue';

const drone = {
  id: '123',
  type: 'drone' as const,
  status: 'active' as const,
  coordinates: {
    latitude: 0,
    longitude: 0,
    altitude: 0,
  },
};

describe('DroneInformationCard', () => {
  it('presents nickname if passed', async () => {
    const wrapper = await mountSuspended(DroneInformationCard, {
      props: {
        drone: {
          ...drone,
          nickname: 'some_nickname',
        },
      },
    });

    expect(wrapper.text()).toContain('some_nickname');
  });

  it('presents drone ID if nickname is not passed', async () => {
    const wrapper = await mountSuspended(DroneInformationCard, {
      props: {
        drone,
        nickname: undefined,
      },
    });

    expect(wrapper.text()).toContain('DRONE 123');
  });
});
