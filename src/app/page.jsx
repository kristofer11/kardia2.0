import Image from 'next/image';
import styles from './page.module.scss';
import Button from '@mui/material/Button';
import { Roboto, Inter } from 'next/font/google';
import Banner from '@/components/Banner/Banner';

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
})

export default function Home() {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/home-banner.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Classical</h1>
                        <h1 className='overlay-text'>Christian</h1>
                        <h1 className='overlay-text'>Parent Partnership</h1>
                    </>
                }
                strength='400'
            />
            <section className='page-content'>

                {/* LOOK AT CHUCK'S SITE FOR HOW TO LAYOUT TEXT/IMAGES (FAMILY HISTORY SECTION I THINK....) */}
                <div className={`${styles.introDiv} ${styles.introDiv1}`}>
                    <div className={styles.introText}>
                        <h4><strong>The best of both worlds</strong></h4>
                        <p>
                            Kardia Classical School combines the benefits of homeschooling and private school education. We call this a <em><strong>parent partnership</strong></em>.
                        </p>
                        <Button variant="contained" href='/parent-partnership'>Learn More</Button>
                    </div>                    
                    <Image
                        src='/images/sitting.png'
                        alt='Kardia students sitting on the floor next to a treehouse.'
                        width='960'
                        height='720'
                        className={`${styles.sittingImg} ${styles.homeImg}`}
                    />

                </div>
                <div className={styles.introDiv}>
                    <Image
                        src='/images/bubbles.png'
                        alt='Kardia students posing with their PE teacher under a baloon arch'
                        width='640'
                        height='410'
                        className={`${styles.bubblesImg} ${styles.homeImg}`}
                    />                       
                    <div className={styles.introText}>
                        <h4><strong>Our Mission</strong></h4>
                        <p>
                        Kardia Classical School aims to provide parents with the tools that they need to classically educate their children in a way that is rooted in a Christian worldview. Together, parents and teachers will nurture students’ appreciation of truth, goodness, and beauty as they strive for excellence.
                        </p>
                        <Button variant='contained' href='/programs'>Program Options</Button>
                    </div>
               
                 


                </div>

            </section>

        </main>
    )
}
