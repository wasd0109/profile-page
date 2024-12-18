import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <nav className='navbar bg-white'>
            <h1 className='navbar-start'>
                <Link className='btn btn-ghost normal-case text-lg' href="/">Sandwiched Engineer</Link>
            </h1>
            <div className='navbar-end'>
                <ul className='menu menu-horizontal flex px-1 justify-around'>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/project">
                            Project
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}