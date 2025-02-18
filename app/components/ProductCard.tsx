import React from 'react'
import Product from './Product'
import { FaCarSide } from "react-icons/fa";
export default function ProductCard() {
    return (
        <div className='bg-gray-100 dark:bg-gray-800 py-20'>
            <h1 className='text-center py-10'>
                <span className="relative inline-block text-gray-900 dark:text-gray-50">
                    Products
                    
                    <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                        
                        <div className="relative flex items-center">
                            <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-500 rounded-full"></span>
                            <span className="w-16 sm:w-20 border-t-2 border-blue-500"></span>
                        </div>
                        
                        <span className="z-20 dark:bg-gray-900 px-1">
                            <FaCarSide className="text-blue-500 mx-2" />
                        </span>
                        
                        <div className="relative flex items-center">
                            <span className="w-16 sm:w-20 border-t-2 border-blue-500"></span>
                            <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-500 rounded-full"></span>
                        </div>
                    </span>
                </span>
            </h1>

            <div className="grid md:grid-cols-4 gap-4 p-8 md:p-16 bg-gray-100 dark:bg-gray-800">
                <Product
                    imageSrc="/img/ev.png"
                    title="Coming Soon"
                    description="Something amazing is on the way! Stay tuned for the launch of our latest product—designed to bring you the best experience."
                    email="kazitaeef@gmail.com"
                    link="https://tailwindflex.com"
                />
                <Product
                    imageSrc="/img/bikes.webp"
                    title="Coming Soon"
                    description="Something amazing is on the way! Stay tuned for the launch of our latest product—designed to bring you the best experience."
                    email="kazitaeef@gmail.com"
                    link="https://www.primebank.com.bd/"
                />
                <Product
                    imageSrc="/img/three.webp"
                    title="Coming Soon"
                    description="Something amazing is on the way! Stay tuned for the launch of our latest product—designed to bring you the best experience."
                    email="kazitaeef@gmail.com"
                    link="https://tailwindflex.com"
                />
                <Product
                    imageSrc="/img/ev.png"
                    title="Coming Soon"
                    description="Something amazing is on the way! Stay tuned for the launch of our latest product—designed to bring you the best experience."
                    email="kazitaeef@gmail.com"
                    link="https://tailwindflex.com"
                />
            </div>
        </div>
    )
}
