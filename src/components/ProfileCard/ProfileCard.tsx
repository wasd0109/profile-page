import Image from 'next/image';
import React from 'react';

import profileImage1 from '@/public/images/oshi.jpg';
import Link from 'next/link';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa6';


function ProfileCard() {
    return (
        <div className="card w-72 shadow-xl">
            <figure>
                <Image
                    src={profileImage1}
                    alt='Ken Cheung'
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Ken Cheung</h2>
                <p>Fullstack engineer from Hong Kong</p>
                <div className="card-actions justify-end">
                    <Link href="https://github.com/wasd0109" target='_blank'>
                        <FaGithub />
                    </Link>
                    <Link href="mailto:me@monakaken.com">
                        <FaRegEnvelope />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;