export class HttpError extends Error {
    readonly status: number

    constructor(status: number, message: string) {
        super(`HTTP ${status}: ${message}`)
        this.name = 'HttpError'
        this.status = status
    }
}

export async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options)

    if (!response.ok) {
        const message = await response.text()
        throw new HttpError(response.status, message)
    }

    return response.json() as Promise<T>
}
