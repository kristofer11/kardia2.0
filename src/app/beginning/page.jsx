import Image from 'next/image';
import Banner from "@/components/Banner/Banner";
import './page.module.scss'
import styles from './page.module.scss';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className="page-main">
            <Banner
                img='/banners/beginning-banner.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='homeOverlayText'>About</h1>
                        <h1 className='homeOverlayText'>  Kardia</h1>
                    </>
                }
                strength={333}
            />

            <section className={`page-content ${styles.beginningSection}`}>
                <AnimateOpacity>
                    <div className={styles.beginningText}>
                        <h3 className={`text-center pt-4 ${styles.beginningTitle}`}>Kardia&apos;s Mission </h3>
                        <p> Kardia Classical School aims to provide parents with the tools that they need to classically educate their children rooted in a Christian worldview. Together, parents and teachers will nurture students&apos; appreciation of truth, goodness, and beauty as they strive for excellence while guiding them to live purposefully in the service of God and man.</p>
                    </div>
                    <Image src='/images/hands-up.jpeg' width='4000' height='2205' className={styles.beginningImg} alt='Kardia students on stage raising hands during performance.' />
                </AnimateOpacity>
                <AnimateOpacity>
                    <div className={styles.beginningText}>
                        <h3 className={`text-center pt-4 ${styles.beginningTitle}`}>How did <em>Kardia</em> come to be?</h3>
                        <p>When circumstances shift unexpectedly, many things can change. In 2020, we recognized a need for a new way to educate our children while keeping them social, as well as safe. Homeschooling is a daunting task for many families who never envisioned themselves in that position. At Kardia Classical School, our goal is to partner with parents to help them classically educate their kindergarten through eighth-grade children. This is a great opportunity for parents and teachers to work together for the betterment of their children’s education.</p>
                    </div>
                    {/* <Image src='/images/hands-up.jpeg' width='4000' height='2205' className={styles.beginningImg} alt='Kardia students on stage raising hands during performance.' /> */}
                </AnimateOpacity>

            </section>
        </main>
    )
}

export default page
