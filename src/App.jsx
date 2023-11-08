import React, { useState, useEffect } from "react";
import { Landing, NavBar, PageNav, Product, Searchbar } from "./components/components";
import { ProductDisplay } from "./containers/containers";

function App() {
  const [pagination, setPagination] = useState(null);
  const [currentProducts, setCurrentProducts] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [trendingList, setTrendingList] = useState(null);
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

  const handleInitiation = async (query = '', page = 1) => {
    try {
      const searchReq = async function () {
        const searchResultsJSON = await fetch(`https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}`);
        let searchResults = await searchResultsJSON.json();
        const products = searchResults.results;
        const trendingOutput = [];
        for(let product of products) {
          trendingOutput.push(product["product_type_unigram"]);
        }
        setTrendingList([... new Set(trendingOutput)]);
      }
      searchReq();
    } catch (err) {
      console.log(err);
    }
  }

  const handleGoHome = () => {
    setPagination(null);
    setCurrentProducts(null);
    setSearchQuery(null);
  }

  useEffect(() => {
    handleInitiation();
  }, [])

  useEffect(() => {
    if (searchQuery) handleSearch(searchQuery, 1);

  }, [searchQuery])


  return (
    <div>
      <NavBar trendingList={trendingList} goHome={handleGoHome} />
      { !searchQuery && trendingList && <Landing trendingList={trendingList} setSearchQuery={setSearchQuery} />}
      <Searchbar setSearchQuery={setSearchQuery} />
      { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} />}
      { currentProducts && <ProductDisplay productList={currentProducts} />}
      { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} />}
    </div>
  )
}

export default App
