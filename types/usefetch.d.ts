interface body {
    body: BodyInit | null
}
interface noBody {
    body?: never
}

type FetchOptions = GET | POST

interface GET extends noBody {
    method: 'GET'
}

interface POST extends body {
    method: 'POST'
}

interface FetchResponse {
    err: Error | null
    res: Response | null
}
type FetchResponsefn = (url: string, options: FetchOptions) => Promise<FetchResponse>
