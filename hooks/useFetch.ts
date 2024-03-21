import toast from 'react-hot-toast';

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error: unknown) {
    throw error instanceof Error && error
  }
}

export const useFetch: FetchResponsefn = async (
  url,
  options
): Promise<any> => {
  try {
    if (!isValidURL(url)) {
      throw new Error('Invalid URL');
    } else {
      let reqPromise = await fetch(url, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: options.body,
        credentials: 'include',
      });
      let response = await reqPromise.json();
      if (reqPromise.ok) {
        return { err: null, res: response };
      } else {
        return { err: new Error(reqPromise.statusText), res: response }
      }
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      toast.error('An error occurred while processing your request'); 
    }
  }
};
