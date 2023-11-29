import Image from 'next/image'
import styles from './page.module.scss'
import { Roboto, Inter } from 'next/font/google'
import Banner from '@/components/Banner/Banner'

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
                <div className={styles.introDiv}>
                    <div className={styles.introText}>
                        <h4><strong>The best of both worlds</strong></h4>
                        <p>
                            Kardia Classical School combines the benefits of homeschooling and private school education.
                        </p>

                    </div>                    
                    <Image
                        src='/images/sitting.png'
                        alt='Kardia students sitting on the floor next to a treehouse.'
                        width='960'
                        height='720'
                        className={styles.sittingImg}
                    />

                </div>
                <div className={styles.introDiv}>
                    <div className={styles.introText}>
                        
                        <h4><strong>Our Mission</strong></h4>
                        <p>
                        Kardia Classical School aims to provide parents with the tools that they need to classically educate their children rooted in a Christian worldview. Together, parents and teachers will nurture students’ appreciation of truth, goodness, and beauty as they strive for excellence, while guiding them to live purposefully in the service of God and man.
                        </p>
                    </div>
                    <Image
                        src='/images/bubbles.png'
                        alt='Kardia students posing with their PE teacher under a baloon arch'
                        width='640'
                        height='410'
                        className={styles.bubblesImg}
                    />                    
                 


                </div>

            </section>

        </main>
    )
}
