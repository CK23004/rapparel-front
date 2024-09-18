import React from 'react'
import './CartPage.css'
import Cart from '../../components/Cart/Cart'
import {assets} from '../../assets/assets'
import Navbarbootstrap from '../../components/Navbar/NavbarBootstrap'

import logo from '../../assets/figma/logomain.png'
import facebook from '../../assets/figma/icons/facebook.svg'
import linkedin from '../../assets/figma/icons/linkedIn.svg'
import youtube from '../../assets/figma/icons/youtube.svg'
import insta from '../../assets/figma/icons/instagram.svg'
import vector from '../../assets/figma/vector.svg'
import search from '../../assets/figma/search.svg'
import bag from '../../assets/figma/bag.svg'
import acc from '../../assets/figma/acc.svg'
import location from '../../assets/figma/location.svg'
import line from '../../assets/figma/line.svg'
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div>
        {/* <Navbarbootstrap/> */}
      <Cart />
      {/* <div className='flex flex-col md:flex-row md:justify-between mx-40 my-20'>
      <div className="logo flex flex-col items-center">
            <img src={assets.logomain} alt="" width={134} height={108} />
            <div className="icons flex">
                <img className='cursor-pointer' src={facebook} alt="" />
                <img src={linkedin} alt="" />
                <img src={youtube} alt="" />
                <img src={insta} alt="" />
            </div>
      </div>
      <div className="navigate flex flex-col md:flex-row gap-24">
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>SHOP</h3>
                <p className='my-2'>Men</p>
                <p className='my-2'>Women</p>
                <p className='my-2'>Kids</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>COMPANY INFO</h3>
                <p className='my-2'>About us</p>
                <p className='my-2'>Locations</p>
                <p className='my-2'>Store</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='my-2 font-bold'>QUICK LINKS</h3>
                <p className='my-2'>Customer Service</p>
                <p className='my-2'>Legal & Privacy</p>
                <p className='my-2'>Contact</p>
            </div>
      </div>
      </div> */}
    </div>
  )
}

export default CartPage
