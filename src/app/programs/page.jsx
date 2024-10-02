import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.programsMain} page-main`}>
            <Banner
                img='/banners/programs-banner.jpeg'
                alt='Leather-bound books'
                title={
                    <>
                        <h1 className='homeOverlayText'> Program</h1>
                        <h1 className='homeOverlayText'> Options</h1>
                    </>
                }
                strength='333'
            />
            <article className={`page-content`}>
                <AnimateOpacity>
                    <section className={styles.program}>
                        <h3>Two Full Days In-person</h3>
                        <p>Our feature program option offers two full days in-person a week. This includes enrichment classes (art/music/PE), with history,  science, grammar, and writing taught at school. You will also get a formal report for your records. However, the best part is that parents may drop students off and leave on in-person days. For your three at-home days, there will be video lessons for more complex subjects. We send out a curriculum list for easy purchasing. Kardia also provides weekly lesson plans, and a monthly in-person, over-the-phone, or online parent-teacher check-in.</p>
                        <p>
                            Kardia Classical School is a member of the Association of Classical Christian Schools <a href='https://classicalchristian.org/https://classicalchristian.org/' target='_blank'>(ACCS)</a>. Please see the teacher job description (see document section below) for more information about daily expectations.
                        </p>
                        <Image
                            src='/images/sitting.png'
                            width='846'
                            height='539'
                            alt='Five children sitting on floor in Kardia Classical uniforms'
                        />
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.program}>
                        <h3>Pre-Kindergarten</h3>
                        <p>Kardia Classical School offers a Pre-Kindergarten program designed to meet the needs of the child who is age four and potty trained by August 31. The goal is to provide a loving and nurturing Christian environment where children can grow and progress in all areas for the glory of God. The developmentally centered curriculum incorporates a variety of techniques, resources, materials and hands-on experiences in order to address different learning styles. Children develop a love for learning and school through hands-on experiences, discussions and explorations.</p>
                        <p>The Pre-Kindergarten curriculum prepares a child for kindergarten and is structured to be fun, yet challenging. The program involves active learning and is devised to address the needs of the whole child. Activities and materials engage the students in social, physical, emotional and intellectual development.</p>
                        <Image
                            src='/images/preK3.jpg'
                            alt='Two girls creating Christmas crafts with pipe cleaners.'
                            width='1536'
                            height='2048'
                            className={styles.prekImage}
                        />
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.program}>
                        <h3>&quot;Tuesday Camp&quot; - Enrichment Half Day</h3>
                        <p>This class will be held on Tuesdays 10:00AM - 2:00PM . This session will have a different overall theme each quarter and will include all kinds of STEAM activities. STEAM is science, technology, engineering, art, and music.</p>
                        <p>
                            You can sign up for all four quarters ahead of time if you want to save space for your child(ren). There are eight weeks in each quarter. This option can be chosen in conjunction with another program option. Uniforms are not required on Tuesday Camp days.
                        </p>
                        <p><strong>Price per session: $35</strong></p>

                        <Image
                            src='/images/tuesday.jpg'
                            width='1024'
                            height='768'
                            alt='Three students of various ages working on school work at kitchen table.'
                        />
                    </section>
                </AnimateOpacity>
            </article>
        </main>
    )
}

export default page
