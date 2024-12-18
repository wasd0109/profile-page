import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type BlogCardProps = {
    title: string,
    excerpt: string,
    thumbnail: string,
    date: Date;
};

function BlogCard({ title, excerpt, thumbnail }: BlogCardProps) {

    return (
        <div className="card w-72 shadow-xl">
            <figure>
                <Image
                    src="/images/oshi.jpg"
                    alt='Ken Cheung'
                    fill
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{excerpt}</p>
                <div className="card-actions justify-end">
                    <Link href="https://github.com/wasd0109" target='_blank'>
                        Detail
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default BlogCard;