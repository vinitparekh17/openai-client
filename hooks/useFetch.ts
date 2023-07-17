interface FetchOptions {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers: {
        'Content-Type': 'application/json'
        'Accept': 'application/json'
    }
    credentials: 'include'
    body?: BodyInit
}

interface FetchResponse {
    err: Error | null
    res: Response | null
}
type FetchResponsefn = (url: string, options: FetchOptions) => Promise<FetchResponse>

function isValidURL(url: string): boolean {
    try {
        new URL(url)
        return true
    } catch (error) {
        return false
    }
}

export const useFetch: FetchResponsefn = async (url, options) => {
    try {
        if (!isValidURL(url)) {
            throw new Error('Invalid URL')
        } else {
        let reqPromise = await fetch(url, options)
        if(reqPromise.ok) {
            return { err: null, res: reqPromise }
        } else {
            return { err: new Error(reqPromise.statusText), res: null}
        }
    }
    } catch (error: unknown) {
        return { err: error as Error, res: null }
    }
}