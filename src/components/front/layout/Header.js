import { useState } from 'react';
import Image from "next/image";
import logoDark from '../../../../public/images/logo-dark.png';
import logoWhite from '../../../../public/images/logo-white.png';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import Link from 'next/link';
import CartListDropdown from '../header/CartListDropdown';
import AuthOptions from '../header/authOptions';
import { useSession } from "next-auth/react";
import HeaderIconSkeleton from '../skeleton/HeaderIconSkeleton';

const Header = ({ isSticky }) => {
    const { status } = useSession();

    const whishtListButton = () => {
        if (status === "loading") {
            return <HeaderIconSkeleton />
        } else {
            return (
                <a
                    href="javascript:void(0)"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white"
                >
                    <FaRegHeart className="h-4 w-4" />
                </a>
            )
        }

    };

    const cartListButton = () => {
        if (status === "loading") {
           return <HeaderIconSkeleton />
        } else {
            return <CartListDropdown />
        }
    };

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
                    <li className="dropdown inline-block relative ps-0.5">
                        {cartListButton()}
                    </li>
                    <li className="inline-block ps-0.5">
                        {whishtListButton()}
                    </li>
                    <li className="dropdown inline-block relative ps-0.5">
                        <AuthOptions />
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

export default Header;
