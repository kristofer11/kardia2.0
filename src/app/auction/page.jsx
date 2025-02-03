import Banner from '@/components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/hearts1.png'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Annual Auction</h1>
                        <h1 className='overlay-text' style={{ fontSize: '3rem', marginLeft: '4rem' }}><em>Heart of Gold</em></h1>
                    </>
                }
                strength='400'
            />
            
            <div className={styles.auctionImgDiv}>
                <Link href='https://fundraiser.support/KardiaClassical2025' target='_blank' ><Image
                    src='/images/2025_auction.jpg'
                    width='900'
                    height='900'
                    alt='information about the 2024 annual auction supporting Kardia Classical School'
                    className={styles.auctionImg}
                /></Link>
                <h4>Click on the image to go to the auction site.</h4>
                <h3>Open from Friday March 21st at 7pm to Sunday March 23rd at 7pm</h3>
            </div>

        </main>
    )
}

export default page