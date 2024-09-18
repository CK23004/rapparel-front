import React, { useState } from 'react'
import './Store.css'
import { assets } from '../../assets/assets'
import Navigation from '../../components/ShopFilters/Navigation/Navigation'
import FilterSlidebar from '../../components/ShopFilters/FilterSlidebar/FilterSlidebar'
import RecommendedProduct from '../../components/ShopFilters/RecommendedProduct/RecommendedProduct'

import products from "../../db/data";
import ProductSearch from '../../components/ShopFilters/ProductSearch/ProductSearch'
import ProductCard from '../../components/ShopFilters/ProductCard/ProductCard'

import FilterBootstrap from '../../components/FilterBootstrap/FilterBootstrap'



const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <ProductCard
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
        <div className="store-header">
        <div className="store-banner">
            <h1>Store Name</h1>
        </div>
        <div className="store-banner-footer">
        <div className="store-banner-left">
            <img src={assets.location} alt="" />
            <h2>Location</h2>
        </div>
        <div className="store-banner-right">
            <h2>Time</h2>
        </div>
        </div>
        </div>

        {/* <ProductSearch query={query} handleInputChange={handleInputChange} /> */}
        <Navigation handleClick={handleClick} />
        <FilterBootstrap handleChange={handleChange}/>
        {/* <FilterSlidebar handleChange={handleChange}/> */}
        <RecommendedProduct  result={result}/>

    </div>
  )
}

export default Store
