import Link from 'next/link';
import React from 'react';
import { FaGithub, FaRegEnvelope } from 'react-icons/fa6';

export default function ProjectPage() {
    return (
        <main className="flex flex-col items-center justify-center p-24">
            <h1 className='prose prose-2xl'>
                Project Page Coming Soon
            </h1>
            <div className='divider divider-vertical'>

            </div>
            <div className='w-1/12 flex justify-between'>
                <Link href="https://github.com/wasd0109" target='_blank'>
                    <FaGithub />
                </Link>
                <Link href="mailto:wasd0109.dev@gmail.com">
                    <FaRegEnvelope />
                </Link>
            </div>
        </main>
    );
}