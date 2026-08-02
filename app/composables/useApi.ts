export function useApi(accessToken?: string) {
  const runtimeConfig = useRuntimeConfig();

  function getFullUrl(endpoint: string) {
    return `${runtimeConfig.public.apiBaseUrl}/${endpoint}`;
  }

  function getHeaders() {
    const headers = new Headers();

    if (accessToken) {
      const bearerToken = `Bearer ${accessToken}`;

      headers.append('Authorization', bearerToken);
    }

    return headers;
  }

  async function handleResponse<T>(response: Response) {
    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    return await response.json() as T;
  }

  async function getRequest<T>(endpoint: string, params?: URLSearchParams) {
    const url = params ? `${getFullUrl(endpoint)}?${params}` : getFullUrl(endpoint);
    const method = 'GET';
    const headers = getHeaders();
    const response = await fetch(url, {
      method,
      headers,
    });

    return await handleResponse<T>(response);
  }

  async function postRequest<T>(endpoint: string, body: unknown) {
    const url = getFullUrl(endpoint);
    const method = 'POST';
    const headers = getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await handleResponse<T>(response);
  }

  async function putRequest<T>(endpoint: string, body: unknown) {
    const url = getFullUrl(endpoint);
    const method = 'PUT';
    const headers = getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await handleResponse<T>(response);
  }

  async function patchRequest<T>(endpoint: string, body: unknown) {
    const url = getFullUrl(endpoint);
    const method = 'PATCH';
    const headers = getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await handleResponse<T>(response);
  }

  async function deleteRequest<T>(endpoint: string, body: unknown) {
    const url = getFullUrl(endpoint);
    const method = 'DELETE';
    const headers = getHeaders();
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
    });

    return await handleResponse<T>(response);
  }

  return {
    get: getRequest,
    post: postRequest,
    put: putRequest,
    patch: patchRequest,
    delete: deleteRequest,
  };
}
