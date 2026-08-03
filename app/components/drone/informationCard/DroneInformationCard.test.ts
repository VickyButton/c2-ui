import { mountSuspended } from '@nuxt/test-utils/runtime';
import { describe, expect, it } from 'vitest';
import DroneInformationCard from './DroneInformationCard.vue';

describe('DroneInformationCard', () => {
  it('presents nickname if passed', async () => {
    const droneInformation = {
      id: '123',
      nickname: 'some_nickname',
      type: 'drone' as const,
      status: 'active' as const,
    };
    const wrapper = await mountSuspended(DroneInformationCard, {
      props: {
        droneInformation,
      },
    });

    expect(wrapper.text()).toContain('some_nickname');
  });

  it('presents drone ID if nickname is not passed', async () => {
    const droneInformation = {
      id: '123',
      type: 'drone' as const,
      status: 'active' as const,
    };
    const wrapper = await mountSuspended(DroneInformationCard, {
      props: {
        droneInformation,
      },
    });

    expect(wrapper.text()).toContain('DRONE 123');
  });
});
