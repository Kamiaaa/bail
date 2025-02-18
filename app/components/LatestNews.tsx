import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function LatestNews() {
    return (
        <div className="sm:col-span-6 lg:col-span-4">
            <div className="flex items-start mb-3 pb-3">
                <Link href="#" className="inline-block mr-3">
                    <div className="h-24 w-32 bg-cover bg-center">
                        <Image className='' src='/img/about-02.jpg' height={500} width={500} alt='About'/>
                    </div>
                </Link>
                <div className="text-sm">
                    <p className="text-gray-600 dark:text-gray-100 text-xs">Aug 18</p>
                    <Link href="#" className="text-gray-900 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-gray-500 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</Link>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <Link href="#" className="inline-block mr-3">
                    <div className="h-24 w-32 bg-cover bg-center">
                        <Image className='' src='/img/about-02.jpg' height={500} width={500} alt='About'/>
                    </div>
                </Link>
                <div className="text-sm w-2/3">
                    <p className="text-gray-600 dark:text-gray-100 text-xs">Jan 18</p>
                    <Link href="#" className="text-gray-900 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-gray-500 leading-none">Barcelona v Bayern
                        Munich </Link>
                </div>
            </div>
            <div className="flex items-start mb-3 pb-3">
                <Link href="#" className="inline-block mr-3">
                    <div className="h-24 w-32 bg-cover bg-center">
                        <Image className='' src='/img/about-02.jpg' height={500} width={500} alt='About'/>
                    </div>
                </Link>
                <div className="text-sm">
                    <p className="text-gray-600 dark:text-gray-100 text-xs">Aug 18</p>
                    <Link href="#" className="text-gray-900 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-gray-500 leading-none">Cristiano Ronaldo
                        of Juventus FC looks dejected during the...</Link>
                </div>
            </div>
            <div className="flex items-start">
                <Link href="#" className="inline-block mr-3">
                <div className="h-24 w-32 bg-cover bg-center">
                        <Image className='' src='/img/about-02.jpg' height={500} width={500} alt='About'/>
                    </div>
                </Link>
                <div className="text-sm w-2/3">
                    <p className="text-gray-600 dark:text-gray-100 text-xs">July 23</p>
                    <Link href="#" className="text-gray-900 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-gray-500 leading-none">Barcelona v Bayern
                        Munich - UEFA Champions League </Link>
                </div>
            </div>
        </div>
    )
}
