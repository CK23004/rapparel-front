
import React, { useContext } from "react";
import { products, store_list } from "../../assets/assets";
import "./ProductDetail.css";
import { StoreContext } from "/src/context/StoreContext";

const ProductDetail = () => {


  return (
    <div>
      <div className="flex flex-col bg-white">

        <div className="flex flex-col w-full px-16 mt-4 max-md:px-5 max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-2 grow max-md:flex-wrap max-md:mt-10 max-md:max-w-full">

                  <div className="productdisplay-left">

                    <div className="productdisplay-img w-[100%]">
                      <img className="productdisplay-main-img h-auto object-contain" src={products.img} alt="notshowing" />
                    </div>

                  </div>

                </div>
              </div>
              <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold text-center text-black max-md:max-w-full">
                    {products.title}
                  </div>
                  <div className="text-2xl font-semibold mt-9 text-zinc-500 max-md:max-w-full">
                    Category : {products.category}
                  </div>

                  <div className="flex gap-5 mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex self-start gap-2">
                      <div className="flex items-start gap-px text-2xl">
                        <h1>Select Size</h1>

                      </div>

                    </div>
                    <div className="flex-auto text-center text-fuchsia-900 text-2xl">
                      See Size Chart
                    </div>
                  </div>
                  <div className="flex gap-5 p-2 bg-opacity-0 mt-7 rounded-xl bg-neutral-100 max-md:flex-wrap max-md:pr-5">


                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none "><h1>XS</h1>
                      </button>
                    </div>

                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none "><h1>S</h1>
                      </button>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none"><h1>M</h1>
                      </button>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none "><h1>L</h1>
                      </button>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none "><h1 className="">XL</h1>
                      </button>
                    </div>
                    <div className="flex items-center justify-center px-4 py-2 rounded-lg bg-stone-200 text-2xl">
                      <button type="button" className="w-5 aspect-[1.67] focus:outline-none "><h1>XXL</h1>
                      </button>
                    </div>

                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1975c90917decf385a8c4dd675d9e9f576454bf787e688e6f89161225a648416?"
                    className="mt-6 ml-5 aspect-[1.18] w-[33px] max-md:ml-2.5"
                  />
                  <div className="flex self-start gap-3 px-px mt-12 max-md:mt-10 text-3xl"><h1>Colour:</h1>
                    <div className="w-7 h-7 bg-black rounded-full shrink-0" />
                    <div className="w-7 h-7 rounded-full shrink-0 bg-neutral-500" />
                    <div className="w-7 h-7 bg-blue-900 rounded-full shrink-0" />
                  </div>
                  <div className="flex gap-3.5 mt-6 text-2xl tracking-tight max-md:flex-wrap">
                    <div className="flex-auto my-auto font-medium text-zinc-500">
                      <span className="line-through"> {products.prevPrice}</span>
                      <span className="text-black"> {products.newPrice}</span>
                    </div>
                    <div className="px-3 py-2 font-bold text-red-600 rounded-lg bg-rose-200">
                      50% OFF
                    </div>
                  </div>
                  <div className=" leading-8 mt-7 text-stone-400 max-md:max-w-full text-2xl">
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.&quot;
                  </div>
                  <div className="flex gap-5 mt-2.5 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-1 justify-center items-center px-6 py-3.5 bg-rose-600 rounded-lg shadow-sm max-md:px-5">

                      <button
                        className="flex flex-1 justify-center items-center px-1 py-1 bg-rose-600 rounded-lg shadow-sm max-md:px-5 text-3xl text-white"
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <button
                      className="flex flex-1 justify-center items-center px-1 py-1 bg-rose-600 rounded-lg shadow-sm max-md:px-5 text-3xl text-white"
                      type="button"
                    >
                      Buy Now
                    </button>



                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="flex flex-col w-full px-16 mt-5 max-md:px-5 max-md:max-w-full">
          <div className="text-3xl font-bold text-black max-md:max-w-full">
            Similiar Products
          </div>
          <div className="mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8">
                  <div className="flex relative flex-col gap-5 justify-between items-end pt-20 pb-1.5 pl-5 w-full rounded-lg aspect-[1.47] max-md:pl-5">
                    <img

                      src={products.img}
                      className="absolute inset-0 object-cover size-full"
                    />

                  </div>
                  <div className="mt-6 text-3xl font-semibold text-black">
                    Casual wear Kurti
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-zinc-500">
                    Category : {products.category}
                  </div>
                  <div className="mt-1 text-1xl font-bold text-fuchsia-700">
                    {products.newPrice}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8">
                  <div className="flex relative flex-col gap-5 justify-between items-end pt-20 pb-1.5 pl-5 w-full rounded-lg aspect-[1.47] max-md:pl-5">
                    <img

                      src={products.img}
                      className="absolute inset-0 object-cover size-full"
                    />

                  </div>
                  <div className="mt-6 text-3xl font-semibold text-black">
                    Casual wear Kurti
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-zinc-500">
                    Category : {products.category}
                  </div>
                  <div className="mt-1 text-1xl font-bold text-fuchsia-700">
                    {products.newPrice}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-8">
                  <div className="flex relative flex-col gap-5 justify-between items-end pt-20 pb-1.5 pl-5 w-full rounded-lg aspect-[1.47] max-md:pl-5">
                    <img

                      src={products.img}
                      className="absolute inset-0 object-cover size-full"
                    />

                  </div>
                  <div className="mt-6 text-3xl font-semibold text-black">
                    Casual wear Kurti
                  </div>
                  <div className="mt-1 text-2xl font-semibold text-zinc-500">
                    Category : {products.category}
                  </div>
                  <div className="mt-1 text-1xl font-bold text-fuchsia-700">
                    {products.newPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail




