"use client"
import { useState } from 'react';
import Link from 'next/link'
import AppBar from './AppBar'
import './header.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="header-div">
            <AppBar />
        </div>
    );
}

export default Header;