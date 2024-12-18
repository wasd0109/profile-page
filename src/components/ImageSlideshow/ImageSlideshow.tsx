'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import profileImage1 from '@/public/images/oshi.jpg';
import profileImage2 from '@/public/images/gun.jpg';

const images = [
    { image: profileImage1, alt: 'Oshikatsu' },
    { image: profileImage2, alt: 'Me with air gun' },
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-full rounded-lg relative overflow-hidden shadow-sm'>
            {images.map((image, index) => (
                <Image
                    className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 scale-[1.1] -translate-x-4 -rotate-5 transition-all duration-500 ease-in-out ${index === currentImageIndex ? "z-[1] opacity-100 scale-100 translate-x-0 rotate-0" : ""}`}
                    key={index}
                    src={image.image}
                    alt={image.alt}
                />
            ))}
        </div>
    );
}