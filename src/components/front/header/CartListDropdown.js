import React, { useEffect, useRef, useState } from 'react'
import luxuriousBag2 from '../../../../public/images/shop/luxurious-bag2.jpg';
import smartWatch from '../../../../public/images/categories/smart-watch.jpg';
import { BsCart3 } from "react-icons/bs";
import Image from 'next/image';

const CartListDropdown = () => {
    const [cartToggle, setCartToggle] = useState(false);
    const cartDropdownRef = useRef(null);
    const cartButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        if (!cartDropdownRef.current.contains(event.target)) {
            setCartToggle(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <button
                data-dropdown-toggle="dropdown"
                className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white" onClick={() => setCartToggle(!cartToggle)}
                ref={cartButtonRef}
                type="button"
            >
                <BsCart3 className="h-4 w-4" />
            </button>
            <div
                className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-800  ${!cartToggle ? 'hidden' : ''}`}
                ref={cartDropdownRef}
            >
                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-between py-1.5 px-4"
                        >
                            <span className="flex items-center">
                                <Image
                                    src={luxuriousBag2}
                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                    alt=""
                                />
                                <span className="ms-3">
                                    <span className="block font-semibold">T-shirt (M)</span>
                                    <span className="block text-sm text-slate-400">
                                        $320 X 2
                                    </span>
                                </span>
                            </span>
                            <span className="font-semibold">$640</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-between py-1.5 px-4"
                        >
                            <span className="flex items-center">
                                <Image
                                    src={luxuriousBag2}
                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                    alt=""
                                />
                                <span className="ms-3">
                                    <span className="block font-semibold">Bag</span>
                                    <span className="block text-sm text-slate-400">
                                        $50 X 5
                                    </span>
                                </span>
                            </span>
                            <span className="font-semibold">$250</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center justify-between py-1.5 px-4"
                        >
                            <span className="flex items-center">
                                <Image
                                    src={smartWatch}
                                    className="rounded shadow dark:shadow-gray-800 w-9"
                                    alt=""
                                />
                                <span className="ms-3">
                                    <span className="block font-semibold">Watch (Men)</span>
                                    <span className="block text-sm text-slate-400">
                                        $800 X 1
                                    </span>
                                </span>
                            </span>
                            <span className="font-semibold">$800</span>
                        </a>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2" />
                    <li className="flex items-center justify-between py-1.5 px-4">
                        <h6 className="font-semibold mb-0">Total($):</h6>
                        <h6 className="font-semibold mb-0">$1690</h6>
                    </li>
                    <li className="py-1.5 px-4">
                        <span className="text-center block">
                            <a
                                href="javascript:void(0)"
                                className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
                            >
                                View Cart
                            </a>
                            <a
                                href="javascript:void(0)"
                                className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-orange-500 border border-orange-500 text-white"
                            >
                                Checkout
                            </a>
                        </span>
                        <p className="text-sm text-slate-400 mt-1">*T&amp;C Apply</p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CartListDropdown