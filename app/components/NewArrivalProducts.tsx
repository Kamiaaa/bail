"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { MdFiberNew } from "react-icons/md";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

const NewArrivalProducts: React.FC = () => {
  const newArrivalProducts: Product[] = [
    { id: 1, name: "Product 1", image: "/img/new-product.avif", price: "$29.99" },
    { id: 2, name: "Product 2", image: "/img/new-product.avif", price: "$39.99" },
    { id: 3, name: "Product 3", image: "/img/new-product.avif", price: "$49.99" },
    { id: 4, name: "Product 4", image: "/img/new-product.avif", price: "$59.99" },
    { id: 5, name: "Product 5", image: "/img/new-product.avif", price: "$69.99" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-center py-10'>
                      <span className="relative inline-block text-gray-900 dark:text-gray-50">
                          New Arrivals
                          
                          <span className="absolute inset-x-0 -bottom-10 flex items-center justify-center z-10">
                              
                              <div className="relative flex items-center">
                                  <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-500 rounded-full"></span>
                                  <span className="w-16 sm:w-20 border-t-2 border-blue-500"></span>
                              </div>
                              
                              <span className="z-20 dark:bg-gray-900 px-1">
                                  <MdFiberNew className="text-blue-500 mx-2" />
                              </span>
                              
                              <div className="relative flex items-center">
                                  <span className="w-16 sm:w-20 border-t-2 border-blue-500"></span>
                                  <span className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-500 rounded-full"></span>
                              </div>
                          </span>
                      </span>
                  </h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {newArrivalProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image src={product.image} alt={product.name} height={500} width={700} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalProducts;
