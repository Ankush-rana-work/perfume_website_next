import React from 'react'
import ab1 from '../../../../../public/images/ab1.jpg'
import ab2 from '../../../../../public/images/ab2.jpg'
import client1 from '../../../../../public/images/client/01.jpg'
import client2 from '../../../../../public/images/client/02.jpg'
import client3 from '../../../../../public/images/client/03.jpg'
import client4 from '../../../../../public/images/client/04.jpg'
import client5 from '../../../../../public/images/client/05.jpg'
import client6 from '../../../../../public/images/client/06.jpg'
import client7 from '../../../../../public/images/client/07.jpg'
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { GrLinkedin } from "react-icons/gr";

import Image from 'next/image'

const aboutUsPage = () => {
    return (
        <>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-5 md:col-span-6">
                            <Image
                                src={ab1}
                                className="rounded-t-full shadow-md dark:shadow-gray-800"
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="lg:ms-8">
                                <h6 className="text-orange-500 font-semibold uppercase text-lg">
                                    Our Shop
                                </h6>
                                <h5 className="font-semibold text-3xl leading-normal my-4">
                                    Focusing on Quality <br /> Material, Good Design
                                </h5>
                                <p className="text-slate-400 max-w-xl">
                                    Donec non interdum nisl. Sed ut est ac lacus sodales convallis.
                                    Nam non velit justo. Mauris vel ultrices tortor. Proin bibendum
                                    magna porttitor porttitor suscipit. Praesent sit amet consequat
                                    eros. Quisque ullamcorper ornare vulputate. Nam sodales sem id
                                    diam sollicitudin, id lobortis tellus tincidunt.
                                </p>
                                <div className="flex items-center mt-6">
                                    <i data-feather="phone" className="w-6 h-6 me-4" />
                                    <div className="">
                                        <h5 className="title font-bold mb-0">Phone</h5>
                                        <a
                                            href="tel:+152534-468-854"
                                            className="tracking-wide text-orange-500"
                                        >
                                            +152 534-468-854
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <i data-feather="map-pin" className="w-6 h-6 me-4" />
                                    <div className="">
                                        <h5 className="title font-bold mb-0">Location</h5>
                                        <a
                                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                                            data-type="iframe"
                                            className="tracking-wide text-center text-orange-500 lightbox"
                                        >
                                            View on Google map
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                            <Image
                                src={ab2}
                                className="rounded-t-full shadow-md dark:shadow-gray-800"
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                            <h6 className="text-orange-500 font-semibold uppercase text-lg">
                                Founder
                            </h6>
                            <h5 className="font-semibold text-3xl leading-normal my-4">
                                Maria J. Rose
                            </h5>
                            <p className="text-slate-400 max-w-xl">
                                Donec non interdum nisl. Sed ut est ac lacus sodales convallis. Nam
                                non velit justo. Mauris vel ultrices tortor. Proin bibendum magna
                                porttitor porttitor suscipit. Praesent sit amet consequat eros.
                                Quisque ullamcorper ornare vulputate. Nam sodales sem id diam
                                sollicitudin, id lobortis tellus tincidunt.
                            </p>
                            <ul className="list-none mt-6 space-x-2">
                                <li className="inline">
                                    <a
                                        href="https://dribbble.com/shreethemes"
                                        target="_blank"
                                        className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"
                                    >
                                        <i
                                            data-feather="dribbble"
                                            className="size-5 align-middle"
                                            title="dribbble"
                                        />
                                    </a>
                                </li>
                                <li className="inline">
                                    <a
                                        href="http://linkedin.com/company/shreethemes"
                                        target="_blank"
                                        className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"
                                    >
                                        <i
                                            data-feather="linkedin"
                                            className="size-5 align-middle"
                                            title="Linkedin"
                                        />
                                    </a>
                                </li>
                                <li className="inline">
                                    <a
                                        href="https://www.facebook.com/shreethemes"
                                        target="_blank"
                                        className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"
                                    >
                                        <i
                                            data-feather="facebook"
                                            className="size-5 align-middle"
                                            title="facebook"
                                        />
                                    </a>
                                </li>
                                <li className="inline">
                                    <a
                                        href="https://www.instagram.com/shreethemes/"
                                        target="_blank"
                                        className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"
                                    >
                                        <i
                                            data-feather="instagram"
                                            className="size-5 align-middle"
                                            title="instagram"
                                        />
                                    </a>
                                </li>
                                <li className="inline">
                                    <a
                                        href="https://twitter.com/shreethemes"
                                        target="_blank"
                                        className="inline-flex hover:text-orange-500 dark:hover:text-orange-500"
                                    >
                                        <i
                                            data-feather="twitter"
                                            className="size-5 align-middle"
                                            title="twitter"
                                        />
                                    </a>
                                </li>
                            </ul>
                            {/*end icon*/}
                        </div>
                    </div>
                    {/*end grid*/}
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 justify-center text-center mb-4">
                        <h6 className="text-orange-500 font-semibold uppercase text-lg">
                            Our Promise
                        </h6>
                        <h5 className="font-semibold text-3xl leading-normal my-4">
                            We Designed and <br /> Developed Products
                        </h5>
                    </div>
                    {/*end grid*/}
                    <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                        {/* Content */}
                        <div className="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900">
                            <i className="mdi mdi-truck-check-outline text-4xl text-orange-500" />
                            <div className="content mt-6">
                                <a
                                    href="#"
                                    className="title h5 text-xl font-medium hover:text-orange-500"
                                >
                                    Free Shipping
                                </a>
                                <p className="text-slate-400 mt-3">
                                    The phrasal sequence of the is now so that many campaign and
                                    benefit
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="text-orange-500">
                                        Read More <i className="mdi mdi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        {/* Content */}
                        <div className="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900">
                            <i className="mdi mdi-account-wrench-outline text-4xl text-orange-500" />
                            <div className="content mt-6">
                                <a
                                    href="#"
                                    className="title h5 text-xl font-medium hover:text-orange-500"
                                >
                                    24/7 Support
                                </a>
                                <p className="text-slate-400 mt-3">
                                    The phrasal sequence of the is now so that many campaign and
                                    benefit
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="text-orange-500">
                                        Read More <i className="mdi mdi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                        {/* Content */}
                        <div className="p-6 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-700 duration-500 rounded-md bg-white dark:bg-slate-900">
                            <i className="mdi mdi-cash-multiple text-4xl text-orange-500" />
                            <div className="content mt-6">
                                <a
                                    href="#"
                                    className="title h5 text-xl font-medium hover:text-orange-500"
                                >
                                    Payment Process
                                </a>
                                <p className="text-slate-400 mt-3">
                                    The phrasal sequence of the is now so that many campaign and
                                    benefit
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="text-orange-500">
                                        Read More <i className="mdi mdi-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Content */}
                    </div>
                </div>
                {/*end container*/}
                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 justify-center text-center mb-4">
                        <h6 className="text-orange-500 font-semibold uppercase text-lg">
                            Our Minds
                        </h6>
                        <h5 className="font-semibold text-3xl leading-normal my-4">
                            Meet Our Team Members
                        </h5>
                    </div>
                    {/*end grid*/}
                    <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <Image
                                        src={client4}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <FiFacebook />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <SiInstagram />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <GrLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href="#"
                                        className="text-lg font-semibold hover:text-orange-500 duration-500"
                                    >
                                        Jack John
                                    </a>
                                    <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <Image
                                        src={client3}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <FiFacebook />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <SiInstagram />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <GrLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href="#"
                                        className="text-lg font-semibold hover:text-orange-500 duration-500"
                                    >
                                        Krista John
                                    </a>
                                    <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <Image
                                        src={client6}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <FiFacebook />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <SiInstagram />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <GrLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href="#"
                                        className="text-lg font-semibold hover:text-orange-500 duration-500"
                                    >
                                        Roger Jackson
                                    </a>
                                    <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3 md:col-span-6">
                            <div className="group text-center">
                                <div className="relative inline-block mx-auto h-52 w-52 rounded-full overflow-hidden">
                                    <Image
                                        src={client7}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black h-52 w-52 rounded-full opacity-0 group-hover:opacity-100 duration-500" />
                                    <ul className="list-none absolute start-0 end-0 -bottom-20 group-hover:bottom-5 duration-500">
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <FiFacebook />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 !mr-1 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <SiInstagram />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="#"
                                                className="size-8 inline-flex items-center justify-center align-middle rounded-full bg-orange-500 text-white"
                                            >
                                                <GrLinkedin />
                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                <div className="content mt-3">
                                    <a
                                        href="#"
                                        className="text-lg font-semibold hover:text-orange-500 duration-500"
                                    >
                                        Johnny English
                                    </a>
                                    <p className="text-slate-400">Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default aboutUsPage