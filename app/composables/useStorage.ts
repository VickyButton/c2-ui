import type { Storage } from '~/types/storage.types';

export function useStorage(storage: Storage) {
  function get(key: string) {
    return storage.get(key);
  }

  function set(key: string, value: string | null) {
    return storage.set(key, value);
  }

  function getObject<T extends object>(key: string) {
    const data = storage.get(key);

    if (data === null) {
      return null;
    }

    return JSON.parse(data) as T;
  }

  function setObject(key: string, value: object) {
    return storage.set(key, JSON.stringify(value));
  }

  return {
    get,
    set,
    getObject,
    setObject,
  };
}
