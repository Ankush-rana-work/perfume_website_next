'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import client1 from '../../../public/images/client/01.jpg'
import client2 from '../../../public/images/client/02.jpg'
import client3 from '../../../public/images/client/03.jpg'
import client4 from '../../../public/images/client/04.jpg'
import client5 from '../../../public/images/client/05.jpg'
import client6 from '../../../public/images/client/06.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomerReviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setActiveIndex(next),
        className: "tiny-single-item",
    };
    return (
        <div className="container relative md:mt-24 mt-16">
            <div className="grid grid-cols-1 justify-center text-center mb-6">
                <h5 className="font-semibold text-3xl leading-normal mb-4">
                    Customer Reviews
                </h5>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Customers love our products and we always strive to please them all.
                </p>
            </div>
            {/*end grid*/}
            <div className="flex justify-center relative mt-20">
                <div className="relative lg:w-1/3 md:w-1/2 w-full">
                    <div className="absolute -top-20 md:-start-24 -start-0">
                        <FaQuoteLeft className="mdi mdi-format-quote-open text-8xl opacity-5" ></FaQuoteLeft>
                    </div>

                    <div className="absolute bottom-28 md:-end-24 -end-0">
                        <FaQuoteRight className="mdi mdi-format-quote-close text-8xl opacity-5"></FaQuoteRight>
                    </div>
                    <Slider {...settings}>

                        <div className="tiny-slide">
                            <div className="text-center">
                                <div className="absolute -top-20 md:-start-24 -start-0">
                                    <FaQuoteLeft className="mdi mdi-format-quote-open text-9xl opacity-5" ></FaQuoteLeft>
                                </div>
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " Cartzio made the processes so easy. Cartzio instantly increased
                                    the amount of interest and ultimately saved us over $10,000. "{" "}
                                </p>
                                <div className="absolute bottom-28 md:-end-24 -end-0">
                                    <FaQuoteRight className="mdi mdi-format-quote-close text-9xl opacity-5"></FaQuoteRight>
                                </div>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client1}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>

                            </div>
                        </div>
                        <div className="tiny-slide">
                            <div className="text-center">
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " I highly recommend Cartzio as the new way to sell your home "by
                                    owner". My home sold in 24 hours for the asking price. Best $400
                                    you could spend to sell your home. "{" "}
                                </p>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client2}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="tiny-slide">
                            <div className="text-center">
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " My favorite part about selling my home myself was that we got to
                                    meet and get to know the people personally. This made it so much
                                    more enjoyable! "{" "}
                                </p>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client3}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="tiny-slide">
                            <div className="text-center">
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " Great experience all around! Easy to use and efficient. "{" "}
                                </p>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client4}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="tiny-slide">
                            <div className="text-center">
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " Cartzio made selling my home easy and stress free. They went
                                    above and beyond what is expected. "{" "}
                                </p>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                    <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline-block">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client5}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="tiny-slide">
                            <div className="text-center">
                                <p className="text-lg text-slate-400 italic">
                                    {" "}
                                    " Cartzio is fair priced, quick to respond, and easy to use. I
                                    highly recommend their services! "{" "}
                                </p>
                                <div className="text-center mt-5">
                                    <ul className="text-xl font-medium text-amber-400 list-none mb-2">
                                        <li className="inline">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                        <li className="inline">
                                            <FaStar className="mdi mdi-star" />
                                        </li>
                                    </ul>
                                    <Image
                                        className="h-14 w-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto"
                                        src={client6}
                                        alt=""
                                    />
                                    <h6 className="mt-2 font-medium">Christa Smith</h6>
                                    <span className="text-slate-400 text-sm">Manager</span>
                                </div>
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>
            {/*end grid*/}
        </div>

    )
}

export default CustomerReviews