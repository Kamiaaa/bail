import React from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Link from 'next/link';

interface ServiceProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
}

export default function Service({ icon, title, description, link }: ServiceProps) {
    return (
        <div className="col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-4 flex flex-col justify-start items-center border-2 border-gray-300 dark:border-gray-600 rounded-xl text-gray-300 dark:text-gray-200 bg-gray-800 dark:bg-gray-900">
            <span className="absolute -top-6 p-3 border-2 border-gray-300 dark:border-gray-600 rounded-full bg-gray-800 dark:bg-gray-900">
                {icon}
            </span>
            <h2 className="my-1 text-base uppercase tracking-wide">{title}</h2>
            <p className="py-2 text-center text-sm">{description}</p>
            <Link href={link}>
                <button className="mt-4 flex items-center text-[#CC0001] dark:text-[#CC0001] hover:text-red-400 dark:hover:text-red-400">
                    View More
                    <HiOutlineArrowRight className="ml-2 w-5 h-5" />
                </button>
            </Link>
        </div>
    );
}
