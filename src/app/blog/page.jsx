import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.programsMain} page-main`}>
            <Banner
                img='/banners/blog-banner.jpg'
                alt='Leather-bound books'
                title={
                    <>
                        <h1 className='homeOverlayText'>Kardia</h1>
                        <h1 className='homeOverlayText'> Blog</h1>
                    </>
                }
                strength='333'
            />
            <article className={`page-content ${styles.blogContent}`}>
                <AnimateOpacity>
                    <section>
                        <h3 className='text-center'>Welcome to Kardia's blog where you will find articles written by various members of our community!</h3>
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.links}>
                        <ul className={styles.linkList}>
                            <li className='blog-link'>
                                📄<Link href='/blog/october2023'>Navigating Screen Time: Striking the Right Balance for Our Children</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/august2023'>Classical Roots: The Importance of "The Lost Tools of Learning" by Dorothy Sayers</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/july2023'>Unveiling the Complex Realities of AI Integration in Education</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/july2022'>Can Martial Arts Integrate Well into a Classical Education?</Link></li>
                            <li className='blog-link'>
                                📄<Link href='/blog/june2022'>Five Best Practices for Retaining School Learning Over a Long Break (aka, Summer!)</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/june2022-siblings'>25 Ways To Keep Younger Siblings Busy During Homeschooling</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/july2021'>Why a Well-Rounded Education Includes Music</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/june2021'>What Does “Parent Partnership” Mean?</Link>
                            </li>
                            <li className='blog-link'>
                                📄<Link href='/blog/may2021'>What Does it Mean to be a “Classical School?”</Link>
                            </li>
                        </ul>
                    </section>
                </AnimateOpacity>
                {/* <AnimateOpacity>
                    <section className={styles.program}>
                        <h3>&quot;Tuesday Camp&quot; - Enrichment Half Day</h3>
                        <p>This class will be held on Tuesdays 10:00AM - 2:00PM . This session will have a different overall theme each quarter and will include all kinds of STEAM activities. STEAM is science, technology, engineering, art, and music.</p>
                        <p>
                            You can sign up for all four quarters ahead of time if you want to save space for your child(ren). There are eight weeks in each quarter. This option can be chosen in conjunction with another program option. Uniforms are not required on Tuesday Camp days.
                        </p>
                        <p><strong>Price per session: $35</strong></p>
                        <p>
                            We will also have a &quot;drop-in&quot; option for a slightly higher daily fee. See the tuition and fees tab for more information.
                        </p>
                        <Image
                            src='/images/at-home.jpg'
                            width='1024'
                            height='768'
                            alt='Three students of various ages working on school work at kitchen table.'
                        />
                    </section>
                </AnimateOpacity> */}
            </article>
        </main>
    )
}

export default page