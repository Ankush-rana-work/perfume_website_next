import React from 'react'
import Image from 'next/image'
import mensWare from '../../../public/images/categories/mens-ware.jpg';
import ladiedWare from '../../../public/images/categories/ladies-ware.jpg';
import kidsWare from '../../../public/images/categories/kids-ware.jpg';
import smartWatch from '../../../public/images/categories/smart-watch.jpg';
import sunglasses from '../../../public/images/categories/sunglasses.jpg';

const TopCategories = () => {
    return (
        <div className="container relative">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">
                    Shop The Collections
                </h5>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Shop the latest products from the most popular collections
                </p>
            </div>
            {/*end grid*/}
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-6 gap-6">
                <a href="#" className="text-center hover:text-orange-500">
                    <Image
                        className="rounded-full shadow dark:shadow-gray-800"
                        src={mensWare}
                        alt=""
                    />
                    <span className="text-xl font-medium mt-3 block">{`Men's Wear`}</span>
                </a>
                <a href="#" className="text-center hover:text-orange-500">
                    <Image
                        src={ladiedWare}
                        className="rounded-full shadow dark:shadow-gray-800"
                        alt=""
                    />
                    <span className="text-xl font-medium mt-3 block">Ladies Wear</span>
                </a>
                <a href="#" className="text-center hover:text-orange-500">
                    <Image
                        src={kidsWare}
                        className="rounded-full shadow dark:shadow-gray-800"
                        alt=""
                    />
                    <span className="text-xl font-medium mt-3 block">Kids Wear</span>
                </a>
                <a href="#" className="text-center hover:text-orange-500">
                    <Image
                        src={smartWatch}
                        className="rounded-full shadow dark:shadow-gray-800"
                        alt=""
                    />
                    <span className="text-xl font-medium mt-3 block">Smart Watch</span>
                </a>
                <a href="#" className="text-center hover:text-orange-500">
                    <Image
                        src={sunglasses}
                        className="rounded-full shadow dark:shadow-gray-800"
                        alt=""
                    />
                    <span className="text-xl font-medium mt-3 block">Sunglasses</span>
                </a>
            </div>
            {/*end grid*/}
        </div>
    )
}

export default TopCategories