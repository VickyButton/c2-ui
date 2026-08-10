import { describe, expect, it } from 'vitest';

describe('useDeviceName', () => {
  it('uses nickname if provided', () => {
    // @ts-expect-error Using partial device for testing purposes.
    const result = useDeviceName({
      nickname: 'some_nickname',
    });

    expect(result).toBe('some_nickname');
  });

  it.each([
    {
      id: '123',
      type: 'drone' as const,
      name: 'DRONE 123',
    },
    {
      id: '123',
      type: 'unknown' as const,
      name: 'DEVICE 123',
    },
  ])('returns $name when device is of type $type and has ID of $id', ({ id, type, name }) => {
    const result = useDeviceName({
      id,
      // @ts-expect-error Testing unknown type for default state.
      type,
    });

    expect(result).toBe(name);
  });
});
