import { useState, useEffect } from "react";

export default function useFetch(initalUrl) {
  const [promise, setPromise] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    if (!initalUrl) return;
    const fetchData = async () => {
      setIsLoading(!isLoading);

      try {
        const response = await fetch(initalUrl);
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        const json = response.json();
        setPromise(json);
        setErrMsg(null);
        setIsLoading(!isLoading);
      } catch (error) {
        setErrMsg(error.message);
        console.log(error.message);
      }
    };

    fetchData();
  }, [initalUrl]);

  return { promise, isLoading, errMsg };
}
