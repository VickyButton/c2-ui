export interface Storage {
  get(key: string): string | null;
  set(key: string, value: string | null): void;
  remove(key: string): void;
}
