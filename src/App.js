import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Photos from "./components/photos";
import useFetch from "./hooks/useFetch";
import SearchInput from "./components/search-input";

// REACT_APP_UNSPLASH_ACCESS
// REACT_APP_UNSPLASH_SECRET

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState(inputValue || "galaxy");
  console.log(inputValue);
  //
  const url = `https://api.unsplash.com/search?page=${pageNumber}&query=${query}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS}`;
  const apiResp = useFetch(url, query, pageNumber);
  //
  useEffect(() => {
    if (apiResp.photos) {
      setTotalPages(apiResp.photos.total_pages);
    }
  }, [apiResp]);

  // useEffect(() => {
  //   async function fetchApi() {
  //     try {
  //       const resp = await fetch(url);
  //       const data = await resp.json();
  //       setApiResp(data.photos.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchApi();
  // }, []);

  return (
    <div className="App">
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClickButton={() => setQuery(inputValue)}
      />
      {apiResp.photos && <Photos photos={apiResp.photos.results} />}
    </div>
  );
}

export default App;
