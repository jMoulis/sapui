import { useState, useEffect } from 'react';
import axios from 'axios';

const useODataApi = ({ responseKey, defaultValue }) => {
  const [data, setData] = useState({ [responseKey]: defaultValue });
  const [url, setUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await axios(url);
      if (response.data.value) {
        setData({ [responseKey]: response.data.value });
      } else {
        setData({ [responseKey]: response.data });
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const doFetch = path => {
    setUrl(path);
  };

  const refresh = () => fetchData();

  return { data, isLoading, isError, doFetch, refresh };
};

export default useODataApi;
