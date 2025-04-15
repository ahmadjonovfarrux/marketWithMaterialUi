import { useState, useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../utils";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsPending(true);
        const req = await axiosInstance(url);
        setData(req)
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending, error };
}
