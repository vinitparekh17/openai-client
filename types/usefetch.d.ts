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
  res: Response | null;
}
type FetchResponsefn = (
  url: string,
  options: FetchOptions
) => Promise<FetchResponse>;
