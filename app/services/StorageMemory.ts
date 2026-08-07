class StorageMemory {
  public get(key: string) {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string) {
    return localStorage.setItem(key, value);
  }
}

export const storageMemory = new StorageMemory();
