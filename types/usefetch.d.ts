interface CommonOptions {
  headers?: HeadersInit;
}
type FetchOptions =
  | ({
      method: 'GET';
      body?: BodyInit;
    } & CommonOptions)
  | ({
      method: 'POST';
      body: BodyInit;
    } & CommonOptions);

interface FetchResponse {
  err: Error | null;
  res: Any | null;
}
type FetchResponsefn = (
  url: string,
  options: FetchOptions
) => Promise<FetchResponse>;
