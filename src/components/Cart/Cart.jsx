import React from 'react'
import jacket from '../../assets/figma/jacket.jpeg'
import wishlist from '../../assets/figma/wishlist.svg'
import del from '../../assets/figma/delete.svg'
import add from '../../assets/figma/add.svg'
import remove from '../../assets/figma/remove.svg'
import promo from '../../assets/figma/giftcard.svg'
import mob from '../../assets/figma/mob.svg'
import more from '../../assets/figma/more.svg'
import location from '../../assets/figma/location.svg'
import google from '../../assets/figma/icons/google.png'
import paypal from '../../assets/figma/icons/paypal.svg'
import mcard from '../../assets/figma/icons/mastercard.svg'
import { useState, useEffect } from 'react'
import PaymentForm from './PaymentForm'
import SimpleBottomNavigation from '../BottomNavigation/SimpleBottomNavigation'

import './CartTailwind.css'; 
// import styles from '../Cart.module.css'; 

const price = 700
const dPrice = 270
const name = "Tailwind Css"
const mobile = "+91 6734362462"

const Cart = () => {
    const [count, setCount] = useState(0)
    const [discountPrice, setdiscountPrice] = useState(dPrice)
    useEffect(() => {

    }, [])

    useEffect(() => {
    }, [count])


    return (
        <div className='flex flex-col md:flex-row justify-center mt-4 gap-10'>
            <div className="flex flex-col">
            <div className='w-full flex flex-col items-center '>
                <div className="cards w-full flex flex-col gap-4 items-center justify-center">
                    <div className='flex gap-4 mx-3'>
                        <img src={location} alt="" width={15} />
                        <p className='text-3xl font-bold'>Delivery at Home- Flat no:301,SVR Encalve,Hyper Nagar,Vasavi,
                            Maharshtra</p>
                    </div>
                    <div className="card flex mb-2 md:m-8 border-1 border-[#9854AB] rounded-lg w-[104%] md:w-[90%] gap-20 p-2">
                        <div className='flex w-full'>
                            <img className='my-2 ml-2 mr-[9px] rounded-lg w-[150px] h-[150px] md:w-[155px] md:h-[150px]' src={jacket} alt="" />
                            <div className="flex flex-col w-full info my-4">

                                <div className='flex justify-between w-full'>
                                    <div className='font-bold text-4xl'>Blue Demin Jacket</div>
                                    <div className="actions flex flex-col gap-16 m-4">
                                        <div className='flex justify-end gap-2'>
                                            <img className='w-10 md:w-11' src={wishlist} alt="" />
                                            <img className='w-10 md:w-11' src={del} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-2 md:my-4 text-[#828282] text-3xl'>for Men's - casual</div>
                                <div className='flex flex-col md:flex-row md:justify-start md:relative '>
                                    <div className='relative text-[#828282] mb-3 text-3xl'>₹ {price} <div className='absolute w-[5.5rem] top-[0.98rem] h-[1px] bg-[#828282]'></div> <span className='ml-5 text-black font-bold'>₹ {discountPrice}</span> </div>

                                    <div className='flex flex-col md:flex-row gap-3 md:absolute md:right-[20px]'>
                                        <div className='bg-[#DA1C5C] flex items-center justify-center text-white py-1 md:py-0 px-4 rounded-lg text-xl w-[40px] '>QTY.</div>
                                        <div className='flex gap-2 text-3xl'>
                                            <img onClick={() => { setCount(count + 1) }} src={add} alt="" />
                                            <button className='border border-[#828282] px-5'>{count}</button>
                                            <img onClick={() => { setCount(count - 1) }} src={remove} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="card mb-2 border-1 border-[#9854AB] md:m-2 rounded-lg w-[104%] md:w-[90%] p-2">
                        <h3 className='font-bold p-2 pb-3 text-4xl '>Offers</h3>
                        <div className="promocode flex items-center justify-between mx-10">
                            <div className='flex gap-2 items-center'>
                                <img src={promo} alt="" />
                                <span className='text-[#828282] text-3xl'>Select a Promo-code</span>
                            </div>
                            <h3 className='text-[#FF0000] text-3xl'>View Offers</h3>
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-between py-3 mt-3 ml-8 mr-4 '>
                            <label className='flex items-center gap-4'>
                                <p className='text-[#828282]  text-3xl '>Enter the Promo-code</p>
                                <input className='border w-50 border-[#828282] rounded-lg py-2  text-3xl' name="firstName" placeholder='PromoCode' />
                            </label>
                            <div className='bg-[#DA1C5C] flex items-center justify-center text-white py-2 px-10 mt-5 md:my-0 rounded-lg text-3xl'>Apply</div>
                        </div>
                    </div>
                    <div className="card mb-3 border-1 border-[#9854AB] md:m-2 rounded-lg w-[104%] md:w-[90%] p-2">
                        <div className="flex items-center justify-between mr-4">
                            <h3 className='font-bold p-2 pb-3 text-4xl  text-3xl'>Offers</h3>
                            <p className='text-[#9854AB] text-3xl'>Change</p>
                        </div>
                        <div className="custInfo text-[#828282] text-3xl">
                            <div className='px-4 pb-2 text-3xl'>{name}</div>
                            <div className='flex gap-1 py-2 p-4'>
                                <img src={mob} alt="" />
                                {mobile}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className='flex items-start font-bold text-[18px] m-8 text-4xl'>Payment Options</h3>
            
                <div className="payOptions flex gap-5 mx-6">
                    <button className='flex items-center rounded-lg px-3 py-1 gap-1 border '>
                        <img src={google} alt="" width={20} /><span> Pay</span>
                    </button>
                    <button className='flex items-center rounded-lg px-2 gap-1 border'>
                        <img src={paypal} alt="" width={20} /><span> PayPal</span>
                    </button>
                    <button className='flex items-center rounded-lg px-2 gap-1 text-white bg-[#2544E5] border'>
                        <img className='' src={mcard} alt="" width={20} /><span> Pay</span>
                    </button>

                </div>
                <PaymentForm />
              
            </div>
            </div>

           
            <div className=''>
                <div className="orderDetails border border-[#9854AB] m-8 rounded-lg md:w-[20vw]">
                    <h4 className='text-[#828282] font-bold m-3 mt-6 text-3xl'>PRICE DETAILS</h4>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold text-3xl'>
                        <span>Price</span>
                        <span>₹ {price}</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold text-3xl'>
                        <span>Discount</span>
                        <span>-₹ {() => { setdiscountPrice(discountPrice - dPrice) }}</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 font-bold text-3xl'>
                        <span>Delivery Charges</span>
                        <span>₹ 40</span>
                    </div>
                    <hr />
                    <div className='flex items-center justify-between m-3 mb-8 font-bold text-3xl'>
                        <span>total Amount</span>
                        <span>₹ {price}</span>
                    </div>
                </div>

                <div className='bg-[#DA1C5C] hidden md:visible text-white flex justify-between  m-8 rounded-lg py-2 gap-10'>
                    <div className="totalflex flex-col ml-8 text-3xl">
                        <div>₹ {price}</div>
                        <div className='text-xs'>Total</div>
                    </div>
                    <div className='flex items-center gap-8 mr-8 text-3xl'>
                        Place Order
                        <img src={more} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart
