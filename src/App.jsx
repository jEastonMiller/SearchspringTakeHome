import React, { useState, useEffect } from "react";
import { NavBar, PageNav, Product, Searchbar } from "./components/components";
import { ProductDisplay } from "./containers/containers";

function App() {
  const [pagination, setPagination] = useState(null);
  const [currentProducts, setCurrentProducts] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [preLoadPrev, setPreLoadPrev] = useState(null);
  const [preLoadNext, setPreLoadNext] = useState(null);

  const handleSearch = async (query = '', page = 1) => {
    try {
      const searchReq = async function () {
        const searchResultsJSON = await fetch(`https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}`);
        let searchResults = await searchResultsJSON.json();
        setPagination(searchResults.pagination);
        setCurrentProducts(searchResults.results);
        console.log(searchResults)
      }
      searchReq();
    } catch (err) {
      console.log(err);
    }
  }

  const handleTest = () => {
    console.log('hello test success');
  }

  // useEffect(() => {
  //   if (searchQuery) handleSearch();
  // }, [])

  useEffect(() => {
    // if (searchQuery) handleSearch(searchQuery, 1);
    handleSearch(searchQuery, 1);
  }, [searchQuery])


  return (
    <div>
      <NavBar />
      <Searchbar setSearchQuery={setSearchQuery} handleTest={handleTest} />
      { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} />}
      { currentProducts && <ProductDisplay productList={currentProducts} />}
      { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} />}
    </div>
  )
}

export default App
