import React from 'react';
import Service from './Service';
import { FaHammer } from "react-icons/fa6";
export default function ServiceCard() {
    return (
        <div className='bg-gray-100 dark:bg-gray-800'>
            <h1 className='text-center py-10'>
                            <span className="relative inline-block text-gray-900 dark:text-gray-50">
                                Services
                                
                                <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                                    
                                    <div className="relative flex items-center">
                                        <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#CC0001] rounded-full"></span>
                                        <span className="w-16 sm:w-20 border-t-2 border-[#CC0001]"></span>
                                    </div>
                                    
                                    <span className="z-20 dark:bg-gray-900 px-1">
                                        <FaHammer className="text-[#CC0001] mx-2" />
                                    </span>
                                    
                                    <div className="relative flex items-center">
                                        <span className="w-16 sm:w-20 border-t-2 border-[#CC0001]"></span>
                                        <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-[#CC0001] rounded-full"></span>
                                    </div>
                                </span>
                            </span>
                        </h1>
            <div className="grid grid-cols-4 gap-8 p-8 md:p-16 bg-gray-100 dark:bg-gray-800">
                <Service
                    icon={<FaHammer className="w-7 h-7 text-[#CC0001]" />}
                    title="Accessories"
                    description="What makes this component awesome is that it’s animated, beautiful, and responsive."
                    link="https://tailwindflex.com"
                />
                <Service
                    icon={<FaHammer className="w-7 h-7 text-[#CC0001]" />}
                    title="Service Centers"
                    description="What makes this component awesome is that it’s animated, beautiful, and responsive."
                    link="https://nextjs.org"
                />
                <Service
                    icon={<FaHammer className="w-7 h-7 text-[#CC0001]" />}
                    title="Find a Dealer"
                    description="What makes this component awesome is that it’s animated, beautiful, and responsive."
                    link="https://mail.purple.com.bd"
                />
                <Service
                    icon={<FaHammer className="w-7 h-7 text-[#CC0001]" />}
                    title="Financial Services"
                    description="What makes this component awesome is that it’s animated, beautiful, and responsive."
                    link="https://nextjs.org"
                />
            </div>
        </div>
    );
}
