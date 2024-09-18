import React, { useState } from 'react'

import Header from '../../components/Header/Header'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import StoreDisplay from '../../components/StoreDisplay/StoreDisplay'
import Banner from '../../components/Banner/Banner'

import './Home.css'


const Home = () => {

  const[category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <ExploreCategory category={category} setCategory={setCategory}/>
      <Banner />
      <h1 className='store-home-title-h2'>Stores Near You</h1> 
      <StoreDisplay category={category}/>

      {/* <BootstrapSidebar/> */}
    
    </div>
  )
}

export default Home
