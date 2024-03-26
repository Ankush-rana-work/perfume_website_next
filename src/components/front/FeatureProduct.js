import Image from 'next/image'
import React from 'react'
import blackPrintTshirt from '../../../public/images/shop/black-print-t-shirt.jpg';
import fashionShoesSneaker from '../../../public/images/shop/fashion-shoes-sneaker.jpg';
import menWhiteSlipShoes from '../../../public/images/shop/men-white-espadrilles-slip-shoes.jpg';
import luxuriousBag from '../../../public/images/shop/luxurious-bag.jpg';
import ladies1 from '../../../public/images/shop/ladies-1.jpg';
import ladies2 from '../../../public/images/shop/ladies-2.jpg';
import mensJacket from '../../../public/images/shop/mens-jecket.jpg';
import sweaterTshirt from '../../../public/images/shop/sweater-t-shirt.jpg';
import trendyTshirt from '../../../public/images/shop/trendy-t-shirt2.jpg';
import { FaRegHeart } from "react-icons/fa";
import { CgPentagonUp } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { NewArrivalAction } from '../../../lib/serverActions/homeActions';


export default async function FeatureProduct() {
    const NewArrivalPorduct = await NewArrivalAction(4);

    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">
                    New Arrival Products
                </h5>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Shop the latest products from the most popular collections
                </p>
            </div>
            {/*end grid*/}
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                {NewArrivalPorduct.data.rows.length > 0 ? (
                    NewArrivalPorduct.data.rows.map((product, index) => (
                        <div className="group">
                            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                                <Image
                                    src={process.env.NEXT_PUBLIC_API_BASE_URL + '/' + product?.product_media[0]?.name}
                                    className="group-hover:scale-110 duration-500"
                                    loading="lazy"
                                    alt=""
                                    width={500}
                                    height={650}
                                    style={{ maxWidth: '100%', height: '330px' }}
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
                                {product.offer > 0 && (
                                    <ul className="list-none absolute top-[10px] start-4">
                                        <li>
                                            <a
                                                href="javascript:void(0)"
                                                className="bg-emerald-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5"
                                            >
                                                Featured
                                            </a>
                                        </li>
                                    </ul>)
                                }
                            </div>
                            <div className="mt-4">
                                <a
                                    href="product-detail-one.html"
                                    className="hover:text-orange-500 text-lg font-medium"
                                >
                                    {product.title}
                                </a>
                                <div className="flex justify-between items-center mt-1">
                                    <p>
                                        ${product.selling_price} <del className="text-slate-400">${product.mrp_price}</del>
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
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
            {/*end grid*/}
        </div>
    )
}
