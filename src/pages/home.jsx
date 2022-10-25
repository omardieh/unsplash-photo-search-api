import SearchInput from "./../components/search-input/index";
import Photos from "./../components/photos/index";
import Pagination from "@mui/material/Pagination";
import useFetch from "./../hooks/useFetch";

export default function Home({
  inputValue,
  setInputValue,
  pageNumber,
  setPageNumber,
  setQuery,
  query,
  isPopup,
  setIsPopup,
}) {
  const url = `https://api.unsplash.com/search?page=${pageNumber}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;
  const { resp, error, loading } = useFetch(url);

  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>something went wrong...</h2>;

  return (
    <div>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClickButton={() => setQuery(inputValue)}
      />
      {resp.photos && (
        <Photos
          isPopup={isPopup}
          setIsPopup={setIsPopup}
          photos={resp.photos.results}
        />
      )}
      {!isPopup && (
        <Pagination
          count={resp.photos?.total_pages}
          page={pageNumber}
          onChange={(e, v) => setPageNumber(v)}
        />
      )}
    </div>
  );
}
