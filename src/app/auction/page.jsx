import Banner from '@/components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/poppies.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Annual Auction</h1>
                        <h1 className='overlay-text' style={{fontSize: '3rem', marginLeft: '4rem'}}><em>In Bloom</em></h1>
                    </>
                }
                strength='400'
            />
            <div className={styles.auctionImgDiv}>
                <Link href='https://www.paycomonline.net/v4/ats/web.php/jobs/ViewJobDetails?job=129336&clientkey=FD86B4C26FC36774A8A7B421DEA7317C' target="_blank">
                    <Image 
                        src='/images/auction.jpg'
                        width='900'
                        height='900'
                        alt='information about the 2024 annual auction supporting Kardia Classical School'
                        className={styles.auctionImg}
                    />               
                </Link>
                <h4>☝️ Click the image above to visit the auction site.</h4>

                <h3>Open from Thursday March 21 at 7pm to Sunday March 24th at 7pm</h3>
            </div>

        </main>
    )
}

export default page