import Image from 'next/image';
import styles from './page.module.scss';
import Button from '@mui/material/Button';
import { Roboto, Inter } from 'next/font/google';
import Banner from '@/components/Banner/Banner';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

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
                <AnimateOpacity>
                    <div className={`${styles.introDiv} ${styles.introDiv1}`}>

                        <div className={styles.introText}>
                            <h4><strong>The best of both worlds</strong></h4>
                            <p>
                                Kardia Classical School combines the benefits of homeschooling and private school education. We call this a <em><strong>parent partnership</strong></em>.
                            </p>
                            <Button variant="contained" href='/enrollment' className={styles.homeBtn}>Enrollment</Button>
                        </div>

                        <Image
                            src='/images/spellingbee.jpg'
                            alt='Kardia students sitting on the floor next to a treehouse.'
                            width='640'
                            height='640'
                            className={`${styles.spellingBeeImg} ${styles.homeImg}`}
                        />

                    </div>
                </AnimateOpacity>
                <AnimateOpacity>
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
                            <Button variant='contained' href='/programs' className={styles.homeBtn}>Program Options</Button>
                        </div>
                    </div>
                </AnimateOpacity>
                <AnimateOpacity>
                    <div className={styles.homeVideoDiv}>
                        <h4><strong>Why Do Students <em>Love</em> Kardia?</strong></h4>
                        <video controls className={styles.homeVideo} poster='/images/homeVideoPoster.jpg'>
                            <source src='/videos/iLoveKardia.webm' />
                        </video>
                        <Button variant="contained" href='/contact' className={styles.inquiryButton}>Inquire Now</Button>

                    </div>                    
                </AnimateOpacity>
            </section>

        </main>
    )
}
