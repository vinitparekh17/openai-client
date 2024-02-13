function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export const useFetch: FetchResponsefn = async (url, options) : Promise<FetchResponse> => {
  try {
    if (!isValidURL(url)) {
      console.log(url);
      throw new Error('Invalid URL');
    } else {
      let reqPromise = await fetch(url, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        body: options.body,
        credentials: 'include',
      });
      if (reqPromise.ok) {
        return { err: null, res: reqPromise };
      }
      return { err: new Error(reqPromise.statusText), res: null };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { err: new Error(error.message), res: null };
    }
    return { err: new Error('Unknown Error'), res: null };
  }
};
