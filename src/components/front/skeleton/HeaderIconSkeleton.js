
import { useRouter } from 'next/navigation';
import React from 'react'

const HeaderIconSkeleton = () => {
    return (
        <button>
            <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-gray-200 bg-gray-200 text-white max-w-sm animate-pulse">
            </span>
        </button>
    )
}

export default HeaderIconSkeleton