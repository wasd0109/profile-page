import Link from 'next/link';
import React from 'react';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className='footer items-center p-4 bg-transparent mb-auto'>
            <div>
                <p>Copyright © 2025 - All right reserved</p>
            </div>
            <ul className='grid-flow-col gap-4 md:place-self-center md:justify-self-end prose-xl'>
                <Link href="https://github.com/wasd0109" target='_blank'>
                    <FaGithub />
                </Link>
                <Link href="mailto:wasd0109.dev@gmail.com" target="_blank">
                    <FaRegEnvelope />
                </Link>
            </ul>
        </footer>
    );
}