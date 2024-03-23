"use client";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export function ToasterProvider({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <></>;

    return <Toaster position="top-center">{children}</Toaster>;
}