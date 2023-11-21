"use client"
import { useState } from 'react';
import Link from 'next/link'
import './header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className='header-div'>
            <Link href='/' >Home</Link>
            
        </div>
    );
}

export default Header;