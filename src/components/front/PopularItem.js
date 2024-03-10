import Image from 'next/image'
import React from 'react'
import luxuriousBag2 from '../../../public/images/shop/luxurious-bag2.jpg';
import ladiesSkirtPair from '../../../public/images/shop/ladies-skirt-pair.jpg';
import smartWatch2 from '../../../public/images/shop/smart-watch.jpg';
import sandalFootware from '../../../public/images/shop/white-sandals-summer-footwear.jpg';
import {  FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { CgPentagonUp } from "react-icons/cg";
import { IoMdStar } from "react-icons/io";

const PopularItem = () => {
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid items-end md:grid-cols-2 mb-6">
                <div className="md:text-start text-center">
                    <h5 className="font-semibold text-3xl leading-normal mb-4">
                        Popular Items
                    </h5>
                    <p className="text-slate-400 max-w-xl">Popular items in this week</p>
                </div>
                <div className="md:text-end">
                    <a
                        href="shop-grid.html"
                        className="text-slate-400 hover:text-orange-500"
                    >
                        See More Items <i className="mdi mdi-arrow-right" />
                    </a>
                </div>
            </div>
            {/*end grid*/}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                <div className="group">
                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                        <Image
                            src={luxuriousBag2}
                            className="group-hover:scale-110 duration-500"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                            <a
                                href="shop-cart.html"
                                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                            >
                                Add to Cart
                            </a>
                        </div>
                        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                                >
                                    {/* <i data-feather="heart" className="size-4" /> */}
                                    <FaRegHeart className="size-4" />
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
                                    <CgPentagonUp className="size-6" />
                                </a>
                            </li>
                        </ul>
                        <ul className="list-none absolute top-[10px] start-4">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                                >
                                    New
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <a
                            href="product-detail-one.html"
                            className="hover:text-orange-500 text-lg font-medium"
                        >
                            Orange Luxurious Bag
                        </a>
                        <div className="flex justify-between items-center mt-1">
                            <p>
                                $16.00 <del className="text-slate-400">$21.00</del>
                            </p>
                            <ul className="font-medium text-amber-400 list-none">
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*end content*/}
                <div className="group">
                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                        <Image
                            src={smartWatch2}
                            className="group-hover:scale-110 duration-500"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                            <a
                                href="shop-cart.html"
                                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                            >
                                Add to Cart
                            </a>
                        </div>
                        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                                >
                                    {/* <i data-feather="heart" className="size-4" /> */}
                                    <FaRegHeart className="size-4" />
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
                                    <CgPentagonUp className="size-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <a
                            href="product-detail-one.html"
                            className="hover:text-orange-500 text-lg font-medium"
                        >
                            Smart Watch
                        </a>
                        <div className="flex justify-between items-center mt-1">
                            <p>
                                $16.00 <del className="text-slate-400">$21.00</del>
                            </p>
                            <ul className="font-medium text-amber-400 list-none">
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*end content*/}
                <div className="group">
                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                        <Image
                            src={sandalFootware}
                            className="group-hover:scale-110 duration-500"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                            <a
                                href="shop-cart.html"
                                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                            >
                                Add to Cart
                            </a>
                        </div>
                        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                                >
                                    {/* <i data-feather="heart" className="size-4" /> */}
                                    <FaRegHeart className="size-4" />
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
                                    <CgPentagonUp className="size-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <a
                            href="product-detail-one.html"
                            className="hover:text-orange-500 text-lg font-medium"
                        >
                            White Sandals
                        </a>
                        <div className="flex justify-between items-center mt-1">
                            <p>
                                $16.00 <del className="text-slate-400">$21.00</del>
                            </p>
                            <ul className="font-medium text-amber-400 list-none">
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*end content*/}
                <div className="group">
                    <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                        <Image
                            src={ladiesSkirtPair}
                            className="group-hover:scale-110 duration-500"
                            alt=""
                        />
                        <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                            <a
                                href="shop-cart.html"
                                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
                            >
                                Add to Cart
                            </a>
                        </div>
                        <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                            <li>
                                <a
                                    href="javascript:void(0)"
                                    className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"
                                >
                                    {/* <i data-feather="heart" className="size-4" /> */}
                                    <FaRegHeart className="size-4" />
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
                                    <CgPentagonUp className="size-6" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <a
                            href="product-detail-one.html"
                            className="hover:text-orange-500 text-lg font-medium"
                        >
                            Ladies Skirt
                        </a>
                        <div className="flex justify-between items-center mt-1">
                            <p>
                                $16.00 <del className="text-slate-400">$21.00</del>
                            </p>
                            <ul className="font-medium text-amber-400 list-none">
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                                <li className="inline-block">
                                    <IoMdStar />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*end content*/}
            </div>
            {/*end grid*/}
        </div>
    )
}

export default PopularItem