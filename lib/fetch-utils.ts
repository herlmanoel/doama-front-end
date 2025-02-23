import { getSession } from 'next-auth/react';

interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
}

interface CustomSession {
    user?: {
        role?: string;
        token?: string;
    };
}

export class FetchUtils {
    private static API_HOST = 'http://localhost:9090';

    private static async request<T>(
        endpoint: string,
        { headers, ...options }: FetchOptions = {}
    ): Promise<T> {
        const session = (await getSession()) as CustomSession;
        const finalHeaders: Record<string, string> = {
            'Content-Type': 'application/json',
            ...headers,
        };
        // if (session?.user?.token) {
        //   finalHeaders['Authorization'] = `Bearer ${session.user.token}`;
        // }
        const response = await fetch(`${this.API_HOST}${endpoint}`, {
            ...options,
            headers: finalHeaders,
        });
        if (!response.ok) throw new Error(`Error ${response.status}`);
        return response.json();
    }

    static fetchGet<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', headers });
    }

    static fetchPost<T>(endpoint: string, body: Record<string, unknown>, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
            headers,
        });
    }

    static fetchPut<T>(endpoint: string, body: Record<string, unknown>, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers,
        });
    }

    static fetchDelete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'DELETE', headers });
    }
    static setApiHost(host: string): void {
        this.API_HOST = host;
    }

    private static buildQueryString(params: Record<string, unknown>): string {
        return Object.entries(params)
            .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(val))}`)
            .join('&');
    }

    static fetchWithQuery<T>(
        endpoint: string,
        params: Record<string, unknown>,
        options: FetchOptions = {}
    ): Promise<T> {
        const queryString = this.buildQueryString(params);
        return this.request<T>(`${endpoint}?${queryString}`, { ...options, method: 'GET' });
    }

    static async fetchWithAuth<T> (
        endpoint: string,
        options: FetchOptions = {}
    ): Promise<T> {
        const session = (await getSession()) as CustomSession;
        if (session?.user?.token) {
            options.headers = {
                ...options.headers,
                Authorization: `Bearer ${session.user.token}`,
            };
        }
        return this.request<T>(endpoint, options);
    }
}

// Example usage:

// GET request
// FetchUtils.fetchGet('/api/example').then(data => console.log(data)).catch(err => console.error(err));

// POST request
// FetchUtils.fetchPost('/api/example', { key: 'value' }).then(data => console.log(data)).catch(err => console.error(err));

// PUT request
// FetchUtils.fetchPut('/api/example', { key: 'value' }).then(data => console.log(data)).catch(err => console.error(err));

// DELETE request
// FetchUtils.fetchDelete('/api/example').then(data => console.log(data)).catch(err => console.error(err));

// Set API host
// FetchUtils.setApiHost('http://new-api-host.com');

// GET request with query parameters
// FetchUtils.fetchWithQuery('/api/example', { param1: 'value1', param2: 'value2' }).then(data => console.log(data)).catch(err => console.error(err));

// GET request with authentication
// FetchUtils.fetchWithAuth('/api/example').then(data => console.log(data)).catch(err => console.error(err));

/** 




 */