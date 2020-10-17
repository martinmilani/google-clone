import { useState, useEffect } from "react";

const GOOGLE_SEARCH_KEY = process.env.REACT_APP_API_KEY;
const GOOGLE_CONTEXT_KEY = process.env.REACT_APP_CONTEXT_KEY;

const useGoogleSearch = (term, type) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        type === "image"
          ? `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}&searchType=${type}`
          : `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_SEARCH_KEY}&cx=${GOOGLE_CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
