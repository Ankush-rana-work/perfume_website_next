import Image from 'next/image'
import React from 'react'
import blackPrintTshirt from '../../../../../public/images/shop/black-print-t-shirt.jpg'
import fashionShoesSneaker from '../../../../../public/images/shop/fashion-shoes-sneaker.jpg'
import menWhiteEspadrillesSlipShoes from '../../../../../public/images/shop/men-white-espadrilles-slip-shoes.jpg'
import luxuriousbag from '../../../../../public/images/shop/luxurious-bag.jpg'
import ladies1 from '../../../../../public/images/shop/ladies-1.jpg'
import ladies2 from '../../../../../public/images/shop/ladies-2.jpg'
import mensJecket from '../../../../../public/images/shop//mens-jecket.jpg'
import sweaterTshirt from '../../../../../public/images/shop/sweater-t-shirt.jpg'
import trendyTshirt2 from '../../../../../public/images/shop/trendy-t-shirt2.jpg'
import menSunGlasses from '../../../../../public/images/shop/men-sun-glasses.jpg'
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { CgPentagonUp } from "react-icons/cg";

const shopPage = () => {
  return (
    <>
      <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 mt-14">
            <h3 className="text-3xl leading-normal font-semibold">Fashion</h3>
          </div>
          <div className="relative mt-3">
            <ul className="tracking-[0.5px] mb-0 inline-block">
              <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500">
                <a href="index.html">Cartzio</a>
              </li>
              <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right" />
              </li>
              <li
                className="inline-block uppercase text-[13px] font-bold text-orange-500"
                aria-current="page"
              >
                Shop Grid
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="lg:col-span-3 md:col-span-4">
              <div className="rounded shadow dark:shadow-gray-800 p-4 sticky top-20">
                <h5 className="text-xl font-medium">Filter</h5>
                <form className="mt-4">
                  <div>
                    <label htmlFor="searchname" className="font-medium">
                      Search:
                    </label>
                    <div className="relative mt-2">
                      <i
                        data-feather="search"
                        className="absolute size-4 top-[9px] end-3"
                      />
                      <input
                        type="text"
                        className="h-9 pe-10 rounded px-3 border border-gray-100 dark:border-gray-800 focus:ring-0 outline-none"
                        name="s"
                        id="searchItem"
                        placeholder="Search..."
                      />
                    </div>
                  </div>
                </form>
                <div className="mt-4">
                  <h5 className="font-medium">Colors:</h5>
                  <ul className="list-none mt-2">
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                        title="Red"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                        title="Blue"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                        title="Green"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-slate-900 inline-flex align-middle"
                        title="Black"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-gray-400 inline-flex align-middle"
                        title="Gray"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-orange-600 inline-flex align-middle"
                        title="Orange"
                      />
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-violet-600 inline-flex align-middle"
                        title="Purple"
                      />
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium">Brands:</h5>
                  <ul className="list-none mt-2">
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        Alexander McQueen
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        Alexander Wang
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        Allegra K
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        AllSaints
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        Badgley Mischka
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-400 dark:text-gray-100">
                        <i className="mdi mdi-shopping-outline text-orange-500 me-2" />
                        Baldinini
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h5 className="font-medium">Sizes:</h5>
                  <ul className="list-none mt-2">
                    <li className="inline">
                      <a
                        href="#"
                        className="size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        S
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        M
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        L
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="size-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        XL
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="w-10 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        2XL
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="w-10 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        3XL
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="#"
                        className="w-10 h-7 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-gray-50 hover:border-slate-900 dark:hover:border-gray-100 hover:text-white dark:hover:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100"
                      >
                        4XL
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*end col*/}
            <div className="lg:col-span-9 md:col-span-8">
              <div className="md:flex justify-between items-center mb-6">
                <span className="font-semibold">Showing 1-10 of 40 items</span>
                <div className="md:flex items-center">
                  <label className="font-semibold md:me-2">Sort by:</label>
                  <select className="form-select form-input md:w-36 w-full md:mt-0 mt-1 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0">
                    <option value="">Featured</option>
                    <option value="">Sale</option>
                    <option value="">Alfa A-Z</option>
                    <option value="">Alfa Z-A</option>
                    <option value="">Price Low-High</option>
                    <option value="">Price High-Low</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={blackPrintTshirt}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <i data-feather="heart" className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <i data-feather="eye" className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <i data-feather="bookmark" className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Black Print T-Shirt
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={fashionShoesSneaker}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Fashion Shoes Sneaker
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={menWhiteEspadrillesSlipShoes}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Mens White Slip Shoes
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={luxuriousbag}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Ladies Luxurious Bag
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                      <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={ladies1}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Ladies Green Top
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={ladies2}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Ladies Onepiece Wear
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={mensJecket}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Mens Brown Jecket
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={sweaterTshirt}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Sweater T-Shirt
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={trendyTshirt2}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Trendy T-shirt
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
                <div className="group relative duration-500 w-full mx-auto">
                  <div className="md:flex items-center">
                    <div className="relative overflow-hidden md:shrink-0 shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                      <Image
                        className="h-full w-full object-cover md:w-48 rounded-md group-hover:scale-110 duration-500"
                        src={menSunGlasses}
                        alt=""
                      />
                      <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegHeart className='size-4' />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="shop-item-detail.html"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <FaRegEye className="size-4" />
                          </a>
                        </li>
                        <li className="mt-1">
                          <a
                            href="javascript:void(0)"
                            className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                          >
                            <CgPentagonUp className="size-4" />
                          </a>
                        </li>
                      </ul>
                      <ul className="list-none absolute top-[10px] start-4">
                        <li>
                          <a
                            href="javascript:void(0)"
                            className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                          >
                            -40% Off
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="md:ms-6 md:mt-0 mt-4">
                      <a
                        href="product-detail-one.html"
                        className="hover:text-orange-500 text-lg font-medium"
                      >
                        Men Sun Glasses
                      </a>
                      <p className="text-slate-400 md:block hidden mt-2">
                        Viverra a consectetur Go sporty this vintage navy and white
                        striped.
                      </p>
                      <p className="mt-2">$16.00</p>
                      <ul className="list-none mt-2">
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-red-600 inline-flex align-middle"
                            title="Red"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-indigo-600 inline-flex align-middle"
                            title="Blue"
                          />
                        </li>
                        <li className="inline">
                          <a
                            href="#"
                            className="size-6 rounded-full ring-2 ring-gray-200 dark:ring-slate-800 bg-emerald-600 inline-flex align-middle"
                            title="Green"
                          />
                        </li>
                      </ul>
                      <div className="mt-4">
                        <a
                          href="shop-cart.html"
                          className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white rounded-md"
                        >
                          Add to Cart
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end content*/}
              </div>
              {/*end grid*/}
              <div className="grid md:grid-cols-12 grid-cols-1 mt-6">
                <div className="md:col-span-12 text-center">
                  <nav aria-label="Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          <i
                            data-feather="chevron-left"
                            className="size-5 rtl:rotate-180 rtl:-mt-1"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          aria-current="page"
                          className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-orange-500 border border-orange-500"
                        >
                          3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          4
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          5
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-3xl hover:text-white border border-gray-100 dark:border-gray-800 hover:border-orange-500 dark:hover:border-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500"
                        >
                          <i
                            data-feather="chevron-right"
                            className="size-5 rtl:rotate-180 rtl:-mt-1"
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default shopPage