import { Inter } from 'next/font/google'
import { Quicksand, Roboto, Poppins } from 'next/font/google'
import './globals.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
// import 'bootstrap/dist/css/bootstrap.css';

import MessengerChat from '@/components/MessengerChat';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
})
const quicksand = Quicksand({
    subsets: ['latin'],
    weight: [
        '400',
        '500',
        '700',
        // '900'
    ],
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
})


export const metadata = {
    title: 'Kardia Classical School|Classical Christian Private School| Snohomish, WA',
    description: 'Welcome to Kardia Classical School, a classical Christian school in Snohomish, Washington. Explore our unique parent partnership program, where students enjoy two days of in-person learning and three days of homeschooling each week. Discover our holistic approach to education rooted in faith, tradition, and academic excellence. Certified teachers guide you in educating your child while allowing for a flexible schedule.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body style={{ flex: 1 }}>
                <MessengerChat />
                <Header />
                <div className={poppins.className}>
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
