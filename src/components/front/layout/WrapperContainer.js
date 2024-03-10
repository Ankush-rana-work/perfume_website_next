"use client";

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer';

const WrapperContainer = ({ children }) => {
    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        // You can adjust the offset value based on when you want the header to become sticky
        if (offset > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        handleScroll();
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    console.log(isSticky);
    return (
        <>
            <Header isSticky={isSticky} />
            {children}
            <Footer />
        </>
    )
}

export default WrapperContainer