import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import ProductStores from './pages/ProductStores/ProductStores'
import Store from './pages/Store/Store'
import Cart from './components/Cart/Cart'
import CartPage from './pages/CartPage/CartPage'
import NavbarBootstrap from './components/Navbar/NavbarBootstrap'

import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';

import ProductDetail from './pages/productDetailPage/ProductDetail'


// import Sidebar from "./components/Sidebar";
// import Contact from "./pages/Contact";
// import About from "./pages/About";


const App = () => {
  const location = useLocation();


  const isExcludedPage = ['/Login', '/Signup'].includes(location.pathname);
  return (
    <>
      <section className='app'>
      {!isExcludedPage && <Navbar />}

        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ProductStores/:category_name' element={<ProductStores />} />
          <Route path='/Store' element={<Store />} />


          <Route path='/Cart' element={<CartPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/productdetail" element={<ProductDetail />} />


          {/* <Route path="/Home" element={<HomePage />} />
        <Route path="/Category" element={<CategoryPage />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/Cart" element={<CartPage />} /> */}



        </Routes>


      </section>

      {/* <Footer /> */}
      {!isExcludedPage && <Footer />}



    </>
  )
}

export default App
