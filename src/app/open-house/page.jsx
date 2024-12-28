import Banner from '@/components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/classroom.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Open House</h1>
                        <h1 className='overlay-text' style={{ fontSize: '3rem', marginLeft: '4rem' }}><em>January 31st</em></h1>
                    </>
                }
                strength='400'
            />
            <div className={styles.auctionImgDiv}>
                <Image
                    src='/images/open_house.png'
                    width='900'
                    height='900'
                    alt='information about the 2024 annual auction supporting Kardia Classical School'
                    className={styles.auctionImg}
                />
                {/* <h3>Open from Thursday March 21 at 7pm to Sunday March 24th at 7pm</h3> */}
            </div>

        </main>
    )
}

export default page