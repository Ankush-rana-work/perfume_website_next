"use client";

import React, { useEffect, useRef, useState } from 'react'
import Image from "next/image";
import logoDark from '../../../../public/images/logo-dark.png';
import logoWhite from '../../../../public/images/logo-white.png';


import { IoSearch } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import UserOptions from '../header/UserOptions';
import CartListDropdown from '../header/CartListDropdown';

const Header = (prop) => {
    const { isSticky } = prop;

    return (
        <nav id="topnav" className={`defaultscroll is-sticky ${isSticky ? 'nav-sticky' : ''}`}>
            <div className="container relative">
                <a className="logo float-left" href="index.html">
                    <div>
                        <Image
                            className="h-[22px] inline-block dark:hidden"
                            src={logoDark}
                            width={114}
                            height={22}
                            alt="description of image"
                        />
                        <Image
                            className="h-[22px] hidden dark:inline-block"
                            src={logoWhite}
                            width={114}
                            height={22}
                            alt="description of image"
                        />
                    </div>
                </a>
                <div className="menu-extras">
                    <div className="menu-item">
                        <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div className="lines">
                                <span />
                                <span />
                                <span />
                            </div>
                        </a>
                    </div>
                </div>
                <ul className="buy-button list-none mb-0 float-right">
                    <li className="dropdown inline-block relative pe-1">
                        <button
                            data-dropdown-toggle="dropdown"
                            className="dropdown-toggle align-middle inline-flex"
                            type="button"
                        >
                            <IoSearch className="size-5" />
                        </button>
                        {/* Dropdown menu */}
                        <div
                            className="dropdown-menu absolute overflow-hidden end-0 m-0 mt-5 z-10 md:w-52 w-48 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 hidden"
                            onclick="event.stopPropagation();"
                        >
                            <div className="relative">
                                <IoSearch className="absolute size-4 top-[9px] end-3" />
                                <input
                                    type="text"
                                    className="h-9 px-3 pe-10 w-full border-0 focus:ring-0 outline-none"
                                    name="s"
                                    id="searchItem"
                                    placeholder="Search..."
                                />
                            </div>
                        </div>
                    </li>
                    <li className="dropdown inline-block relative ps-0.5">
                        <CartListDropdown />
                    </li>
                    <li className="inline-block ps-0.5">
                        <a
                            href="javascript:void(0)"
                            className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white"
                        >
                            <FaRegHeart className="h-4 w-4" />
                        </a>
                    </li>
                    <li className="dropdown inline-block relative ps-0.5">
                        <UserOptions />
                    </li>
                    {/*end dropdown*/}
                </ul>
                <div id="navigation">
                    <ul className="navigation-menu">
                        <li className="has-submenu parent-menu-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="/about-us">About us</Link>
                        </li>
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header