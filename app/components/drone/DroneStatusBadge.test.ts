import { describe, expect, it } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import DroneStatusBadge from './DroneStatusBadge.vue';
import Badge from '../ui/badge/Badge.vue';

describe('DroneStatusBadge', () => {
  it.each([
    {
      status: 'offline',
      label: 'OFFLINE',
      variant: 'neutral',
    },
    {
      status: 'standby',
      label: 'STANDBY',
      variant: 'warning',
    },
    {
      status: 'active',
      label: 'ACTIVE',
      variant: 'success',
    },
    {
      status: 'unknown',
      label: 'ERROR',
      variant: 'danger',
    },
  ])('presents label $label with variant $variant when status is $status', async ({ status, label, variant }) => {
    const wrapper = await mountSuspended(DroneStatusBadge, {
      props: {
        // @ts-expect-error Testing unknown status for error state.
        status,
      },
    });

    const badge = wrapper.getComponent(Badge);
    expect(badge.props()).toEqual({
      label,
      variant,
    });
  });
});
