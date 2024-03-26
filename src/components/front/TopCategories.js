import React from 'react'
import Image from 'next/image'
import mensWare from '../../../public/images/categories/mens-ware.jpg';
import ladiedWare from '../../../public/images/categories/ladies-ware.jpg';
import kidsWare from '../../../public/images/categories/kids-ware.jpg';
import smartWatch from '../../../public/images/categories/smart-watch.jpg';
import sunglasses from '../../../public/images/categories/sunglasses.jpg';
import { topCategoriesAction } from '../../../lib/serverActions/homeActions';


export default async function TopCategories() {
    const topCategories = await topCategoriesAction();
    console.log(topCategories, 'topCategories')
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
                {topCategories?.data?.rows?.map(item => (
                    <a key={item.id} href="#" className="text-center hover:text-orange-500">
                        <Image
                            className="rounded-full shadow dark:shadow-gray-800"
                            src={process.env.NEXT_PUBLIC_API_BASE_URL+'/'+item?.category_media?.name}
                            width={800}
                            height={800}
                            alt=""
                        />
                        <span className="text-xl font-medium mt-3 block">{item.name}</span>
                    </a>
                ))}
            </div>
            {/*end grid*/}
        </div>
    )
}