export interface API {
  accessToken: string | null;
  get<T>(endpoint: string, params?: URLSearchParams): Promise<T>;
  post<T>(endpoint: string, body: unknown): Promise<T>;
  put<T>(endpoint: string, body: unknown): Promise<T>;
  patch<T>(endpoint: string, body: unknown): Promise<T>;
  delete<T>(endpoint: string, body: unknown): Promise<T>;
}
