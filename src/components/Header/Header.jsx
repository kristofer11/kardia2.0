"use client"
import { useState } from 'react';
import Link from 'next/link'
import AppBar from './AppBar'
import './header.scss';
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: [
        '400',
        '500',
        '700',
        // '900'
    ],
})

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header-div'>
            <AppBar />
        </div>
    );
}

export default Header;