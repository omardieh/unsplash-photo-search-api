import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [error, setError] = useState("");
  const [resp, setResp] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function handleFetch() {
      axios
        .get(url)
        .then((resp) => {
          setResp(resp.data);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }
    handleFetch();
  }, [url]);

  return { resp, error, loading };
}
export default useFetch;
