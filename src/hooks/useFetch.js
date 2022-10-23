import { useEffect, useState } from "react";

function useFetch(url, query, pageNumber) {
  const [apiResp, setApiResp] = useState([]);
  const [error, setError] = useState("");
  const [resp, setResp] = useState([]);

  useEffect(() => {
    async function handleFetch() {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setResp(data);
      } catch (e) {
        setError(e);
      }
    }

    handleFetch();
  }, [query, pageNumber, url]);

  return resp;
}
export default useFetch;
