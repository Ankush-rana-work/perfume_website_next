import React from 'react'
import { FaDribbble, FaInstagram, FaRegHeart } from "react-icons/fa";
import { FiFacebook, FiShoppingCart, FiTwitter } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoMailOutline, IoSearch } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineContactEmergency } from "react-icons/md";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { RiSecurePaymentLine } from "react-icons/ri";

const Footer = () => {

    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <a href="#" className="text-[22px] focus:outline-none">
                                        <img src="assets/images/logo-light.png" alt="" />
                                    </a>
                                    <p className="mt-6 text-gray-300">
                                        Upgrade your style with our curated sets. Choose confidence,
                                        embrace your unique look.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="inline">
                                            <a
                                                href="https://1.envato.market/cartzio"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <FiShoppingCart className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://dribbble.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <FaDribbble className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="http://linkedin.com/company/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <BiLogoLinkedin className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://www.facebook.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <FiFacebook className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://www.instagram.com/shreethemes/"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <FaInstagram className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="https://twitter.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <FiTwitter className="h-4 w-4 align-middle" />
                                            </a>
                                        </li>
                                        <li className="inline">
                                            <a
                                                href="mailto:support@shreethemes.in"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <IoMailOutline className="h-4 w-4 align-middle" />

                                            </a>
                                        </li>
                                    </ul>
                                    {/*end icon*/}
                                </div>
                                {/*end col*/}
                                <div className="lg:col-span-6 md:col-span-12">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                                        Shopping &amp; Clothes
                                    </h5>
                                    <div className="grid md:grid-cols-12 grid-cols-1">
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Men
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Jackets &amp;
                                                        Coats{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Jeans{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Loungewear{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Polo shirts{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Shirts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*end col*/}
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Shorts{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Suits Swimwear{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> T-shirts{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Tracksuits{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Trousers
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Shirts
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*end col*/}
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li>
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> My account{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Order History{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Wish List{" "}
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Newsletter
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Affiliate
                                                    </a>
                                                </li>
                                                <li className="mt-[10px]">
                                                    <a
                                                        href="#"
                                                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                                    >
                                                        <i className="mdi mdi-chevron-right" /> Returns
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*end col*/}
                                    </div>
                                </div>
                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                                        Newsletter
                                    </h5>
                                    <p className="mt-6">
                                        Sign up and receive the latest tips via email.
                                    </p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">
                                                    Write your email <span className="text-red-600">*</span>
                                                </label>
                                                <div className="form-icon relative mt-2">
                                                    <i
                                                        data-feather="mail"
                                                        className="size-4 absolute top-3 start-4"
                                                    />
                                                    <input
                                                        type="email"
                                                        className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none"
                                                        placeholder="Email"
                                                        name="email"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                id="submitsubscribe"
                                                name="send"
                                                className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end grid*/}
                        </div>
                        {/*end col*/}
                    </div>
                </div>
                {/*end grid*/}
                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0 border-t border-slate-800">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2">
                            <div className="flex items-center lg:justify-center">
                                <TbTruckDelivery className="mdi mdi-truck-check-outline align-middle text-lg mb-0 me-2" />
                                <h6 className="mb-0 font-medium">Free delivery</h6>
                            </div>
                            {/*end content*/}
                            <div className="flex items-center lg:justify-center">
                                <MdOutlineContactEmergency className="mdi mdi-archive align-middle text-lg mb-0 me-2" />
                                <h6 className="mb-0 font-medium">Non-contact shipping</h6>
                            </div>
                            {/*end content*/}
                            <div className="flex items-center lg:justify-center">
                                <FaRegMoneyBill1 className="mdi mdi-cash-multiple align-middle text-lg mb-0 me-2" />
                                <h6 className="mb-0 font-medium">Money-back quarantee</h6>
                            </div>
                            {/*end content*/}
                            <div className="flex items-center lg:justify-center">
                                <RiSecurePaymentLine className="mdi mdi-shield-check align-middle text-lg mb-0 me-2" />
                                <h6 className="mb-0 font-medium">Secure payments</h6>
                            </div>
                            {/*end content*/}
                        </div>
                        {/*end grid*/}
                    </div>
                    {/*end*/}
                </div>
                {/*end grid*/}
            </div>
            {/*end container*/}
        </footer>
    )
}

export default Footer