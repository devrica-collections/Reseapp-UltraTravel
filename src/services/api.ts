export async function request<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options)

    if (!response.ok) {
        const message = await response.text()
        throw new Error(`HTTP ${response.status}: ${message}`)
    }

    return response.json() as Promise<T>
}
