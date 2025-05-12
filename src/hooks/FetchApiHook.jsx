import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {
  const [res, setres] = useState();
  const [loader, setloader] = useState(false)

  const callApi = async () => {
    setloader(true)
    const res = await axios.get(url)
    setres(res);
    setloader(false)
  };

  useEffect(() => {
    callApi();
  }, []);
  return {res,loader};
};
