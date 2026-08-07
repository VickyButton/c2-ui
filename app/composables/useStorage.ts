export function useStorage() {
  const storage = inject(STORAGE_INJECTION_KEY);

  invariant(storage !== undefined, 'Storage is not provided.');

  const get = (key: string) => {
    return storage.get(key);
  };

  const set = (key: string, value: string | null) => {
    return storage.set(key, value);
  };

  const getObject = <T extends object>(key: string) => {
    const data = storage.get(key);

    if (data === null) {
      return null;
    }

    return JSON.parse(data) as T;
  };

  const setObject = (key: string, value: object) => {
    return storage.set(key, JSON.stringify(value));
  };

  return {
    get,
    set,
    getObject,
    setObject,
  };
}
