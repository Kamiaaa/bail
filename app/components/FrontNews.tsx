import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function FrontNews() {
    return (
        <div className="sm:col-span-12 lg:col-span-3">
            <Link href="#">
                <div className="bg-cover text-center overflow-hidden">
                    <Image className='' src='/img/about-02.jpg' height={500} width={500} alt='About'/>
                </div>
            </Link>
            <div
                className="mt-3 bg-white dark:bg-slate-700 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <Link href="#"
                        className="text-xs text-indigo-600 dark:text-gray-100 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                        Fashion
                    </Link>
                    <Link href="#"
                        className="text-gray-900 dark:text-gray-100 font-bold text-lg mb-2 hover:text-indigo-600 dark:hover:text-gray-500 transition duration-500 ease-in-out">The
                        perfect summer sweater that you can wear! </Link>
                    <p className="text-gray-700 text-xs mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}
