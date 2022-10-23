import SearchInput from "./../components/search-input/index";
import Photos from "./../components/photos/index";
import Pagination from "@mui/material/Pagination";
import useFetch from "./../hooks/useFetch";
import { useEffect } from "react";

export default function Home({
  inputValue,
  setInputValue,
  totalPages,
  pageNumber,
  setPageNumber,
  setQuery,
  query,
  setTotalPages,
  isPopup,
  setIsPopup,
}) {
  const url = `https://api.unsplash.com/search?page=${pageNumber}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;
  const apiResp = useFetch(url, query, pageNumber);

  useEffect(() => {
    if (apiResp.photos) {
      setTotalPages(apiResp.photos.total_pages);
    }
  }, [apiResp]);

  return (
    <div>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClickButton={() => setQuery(inputValue)}
      />
      {apiResp.photos && (
        <Photos
          isPopup={isPopup}
          setIsPopup={setIsPopup}
          photos={apiResp.photos.results}
        />
      )}
      {!isPopup && (
        <Pagination
          count={Math.floor(totalPages / 10)}
          page={pageNumber}
          onChange={(e, v) => setPageNumber(v)}
        />
      )}
    </div>
  );
}
