import type { Storage } from '~/types/storage.types';

export function useStorage<T extends object>(storage: Storage) {
  function get(key: string) {
    const data = storage.get(key);

    return data === null ? null : JSON.parse(data) as T;
  }

  function set(key: string, value: string) {
    return storage.set(key, JSON.stringify(value));
  }

  return {
    get,
    set,
  };
}
