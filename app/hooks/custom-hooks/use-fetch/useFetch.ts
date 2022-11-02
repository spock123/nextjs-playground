import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<Response | null>(null);
  const [error, setError] = useState<Error | null>();
  const [isPending, setIsPending] = useState<boolean>(false);
  useEffect(() => {
    setIsPending(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('something wrong, çould not connect to resource');
        }
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsPending(false);
      })
      .then(() => {
        setError(null);
      })
      .catch((error) => {
        console.warn(`sorry an error occurred, due to ${error.message} `);
        setData(null);
        setIsPending(false);
        setError(error.message);
      });
  }, [url]);
  return [data, isPending, error];
};

export default useFetch;
