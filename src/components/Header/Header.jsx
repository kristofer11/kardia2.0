"use client"
import { useState } from 'react';
import Link from 'next/link'
import AppBar from './AppBar'
import './header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header-div'>
            <Link href='/' >Home</Link>
            <Link href='/beginning'>Beginning</Link>
            <AppBar />
        </div>
    );
}

export default Header;