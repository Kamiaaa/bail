import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductProps {
    imageSrc: string;
    title: string;
    description: string;
    email: string;
    link: string;
}

export default function Product({ imageSrc, title, description, link }: ProductProps) {
    return (
        <Link href={link}>
            <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative bg-white dark:bg-gray-800 group">
                {/* Card Image */}
                <Image className="w-full h-64 object-cover" height={500} width={500} src={imageSrc} alt="Card image" />
                
                {/* Overlay for Title and Description */}
                <div className="absolute inset-0 flex flex-col justify-end bg-blue-500/80 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h2 className="text-white dark:text-white">{title}</h2>
                    <p className="text-sm mt-1 dark:text-gray-300">{description}</p>
                </div>

                {/* Title Visible Initially */}
                <div className="absolute bottom-4 left-4 bg-blue-500/70 text-white px-3 py-1 rounded opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
                </div>
            </div>
        </Link>
    );
}
