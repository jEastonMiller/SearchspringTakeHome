import React, { useState, useEffect } from "react";
import { Landing, NavBar, PageNav, Searchbar, Footer } from "./components/components";
import { ProductDisplay } from "./containers/containers";

function App() {
  const [pagination, setPagination] = useState(null);
  const [currentProducts, setCurrentProducts] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [trendingList, setTrendingList] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = async (query = '', page = 1) => {
    try {
      const searchReq = async function () {
        const searchResultsJSON = await fetch(`https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=${query}&resultsFormat=native&page=${page}`);
        let searchResults = await searchResultsJSON.json();
        setPagination(searchResults.pagination);
        setCurrentProducts(searchResults.results);
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
        setTrendingList([... new Set(trendingOutput.slice(0, 8))]);
      }
      searchReq();
    } catch (err) {
      console.log(err);
    }
  }

  const handleAddToCart = (product, currentCart) => {
    const newCart = JSON.parse(JSON.stringify(currentCart));
    product.quantity = 1;
    let cached = false;
    let totalCartCount = 0;
    for (let existingItem of newCart) {
      if(existingItem.thumbnail === product.thumbnail) {
        existingItem.quantity += 1
        cached = true;
      } 
      totalCartCount += existingItem.quantity;
    }
    if (!cached) {
      newCart.push(product);
      totalCartCount += 1
    } 
    setCartCount(totalCartCount);
    setCart(newCart);
  }

  const handleCartClick = () => {
    console.log(cart);
  }

  const handleGoHome = () => {
    setPagination(null);
    setCurrentProducts(null);
    setSearchQuery('');
  }

  useEffect(() => {
    handleInitiation('', Math.floor( ( Math.random() * 185 ) + 1));

    const repo = 'https://github.com/jEastonMiller/SearchspringTakeHome';
    const linkedIn = 'https://www.linkedin.com/in/j-easton-miller/'
    console.info('HERE IS THE REPO: ', repo)
    console.info('ADD ME ON LINKEDIN!    ', linkedIn)
  }, [])

  useEffect(() => {
    if (searchQuery) handleSearch(searchQuery, 1);
  }, [searchQuery])

  return (
    <div>
      <div id="home">
        <NavBar trendingList={trendingList} goHome={handleGoHome} cartCount={cartCount} handleCartClick={handleCartClick} />
        <Searchbar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
        { !searchQuery && trendingList && <Landing trendingList={trendingList} setSearchQuery={setSearchQuery} />}
        { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} />}
        { currentProducts && <ProductDisplay productList={currentProducts} handleAddToCart={handleAddToCart} cart={cart}/>}
        { pagination && <PageNav pagination={pagination} searchQuery={searchQuery} handleSearch={handleSearch} position={'bottom'} />}
      </div>
      <Footer goHome={handleGoHome}/>
    </div>
  )
}

export default App
