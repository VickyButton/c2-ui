export class APIFetch {
  private readonly baseUrl: string;
  public accessToken: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private getFullUrl(endpoint: string) {
    return `${this.baseUrl}/${endpoint}`;
  }

  private getHeaders() {
    const headers = new Headers();

    if (this.accessToken) {
      const bearerToken = `Bearer ${this.accessToken}`;

      headers.append('Authorization', bearerToken);
    }

    return headers;
  }

  private async handleResponse<T>(response: Response) {
    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    return await response.json() as T;
  }

  public async get<T>(endpoint: string, params?: URLSearchParams) {
    const url = params ? `${this.getFullUrl(endpoint)}?${params}` : this.getFullUrl(endpoint);
    const method = 'GET';
    const headers = this.getHeaders();
    const response = await fetch(url, {
      method,
      headers,
    });

    return await this.handleResponse<T>(response);
  }

  public async post<T>(endpoint: string, body: unknown) {
    const url = this.getFullUrl(endpoint);
    const method = 'POST';
    const headers = this.getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await this.handleResponse<T>(response);
  }

  public async put<T>(endpoint: string, body: unknown) {
    const url = this.getFullUrl(endpoint);
    const method = 'PUT';
    const headers = this.getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await this.handleResponse<T>(response);
  }

  public async patch<T>(endpoint: string, body: unknown) {
    const url = this.getFullUrl(endpoint);
    const method = 'PATCH';
    const headers = this.getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await this.handleResponse<T>(response);
  }

  public async delete<T>(endpoint: string, body: unknown) {
    const url = this.getFullUrl(endpoint);
    const method = 'DELETE';
    const headers = this.getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await this.handleResponse<T>(response);
  }

  public setAccessToken(value: string | null) {
    this.accessToken = value;
  }
}
