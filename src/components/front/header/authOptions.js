import React, { useEffect, useRef, useState } from 'react'
import clientImg from '../../../../public/images/client/16.jpg';
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import { FaRegHeart } from 'react-icons/fa';
import { SlLogin } from "react-icons/sl";
import HeaderIcon from '../skeleton/HeaderIconSkeleton';
import HeaderIconSkeleton from '../skeleton/HeaderIconSkeleton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthOptions = () => {
    const { data: session, status } = useSession();
    const [toggleUserOptions, setToggleUserOptions] = useState(false);
    const userOptionDropdownRef = useRef(null);
    const userOptionButtonRef = useRef(null);
    const router = useRouter();

    const handleClickOutside = (event) => {
        if (!userOptionDropdownRef.current.contains(event.target)) {
            setToggleUserOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const signOutUser = async () => {
        await signOut({ redirect: false });
        setToggleUserOptions(false);
        // Redirect to a specific page after successful sign-in
        router.push('/');
    }

    if (status == "loading") {
        return (<HeaderIconSkeleton />)
    }

    return (
        <>
            {session?.user && (
                <button onClick={() => setToggleUserOptions(!toggleUserOptions)}>
                    <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white" ref={userOptionButtonRef}>
                        <Image
                            src={clientImg}
                            className="rounded-full"
                            alt=""
                        />
                    </span>
                </button>)}

            {!session?.user && (
                <Link href="/api/auth/signin"
                    className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white"
                >
                    <SlLogin className="h-4 w-4" />
                </Link>
            )}

            <div
                className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${!toggleUserOptions ? 'hidden' : ''}`}
                ref={userOptionDropdownRef}
            >
                <ul className="py-2 text-start">
                    <li>
                        <p className="text-slate-400 pt-2 px-4">Welcome {session?.user?.name}</p>
                    </li>
                    <li>
                        <Link
                            href="user-account.html"
                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                        >
                            <i data-feather="user" className="h-4 w-4 me-2" />
                            Account
                        </Link>
                    </li>
                    <li>
                        <a
                            href="user-setting.html"
                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                        >
                            <i data-feather="settings" className="h-4 w-4 me-2" />
                            Settings
                        </a>
                    </li>
                    <li className="border-t border-gray-100 dark:border-gray-800 my-2" />
                    <li>
                        <button
                            href="login.html"
                            className="flex items-center font-medium py-2 px-4 dark:text-white/70 hover:text-orange-500 dark:hover:text-white"
                            onClick={()=>signOutUser()}
                        >
                            <i data-feather="log-out" className="h-4 w-4 me-2" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AuthOptions