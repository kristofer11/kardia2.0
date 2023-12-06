import Image from 'next/image';
import styles from '../page.module.scss';
import AnimateOpacity from '@/components/animations/AnimateOpacity';
import { Merriweather, Lato } from 'next/font/google'

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '400',
})

const lato = Lato({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
})

const page = () => {
    return (
        <main className={`${styles.blogPost} ${merriweather.className} page-main`}>

            <article className={`page-content ${styles.blogContent}`}>
                <AnimateOpacity>
                    <section className={`${styles.section} ${lato.className}`}>
                        <h4 className={styles.blogTitle}>Why a Well-Rounded Education Includes Music</h4>
                        <p className={styles.author}>July 13, 2021 by Leslie Schmunk</p>
                        <figure>
                            <Image
                                src='/blog/brain.jpg'
                                width='550'
                                height='550'
                                alt='Brain with music notes and quote: "FACT: one of the only activities that activates, stimulates, and uses the entire brain is MUSIC'
                                className={styles.blogImg}
                            // className='blog-img col-md-5 col-9'
                            />
                        </figure>
                    </section>
                </AnimateOpacity>

                <div className='blog-content'>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>
                                I recently had a conversation with a music teacher friend of mine about our early memories of attending music class in elementary school.  My earliest memories don’t actually start until at least fourth grade.  Here’s what I remember:
                            </p>
                            <p>
                                We sang, “Leavin’ on a Jet Plane” and “Country Roads, Take Me Home” at our concert. Our accompanist was the PE teacher, and he only had 9 fingers (I marveled at how he could play the piano so beautifully with only nine). Our music teacher played the saw.  Yes, you read that right…the SAW!  She played it in every concert! That’s it until junior high and high school.
                            </p>
                            <p>
                                At first glance, it looks like I didn’t really learn or retain anything and that my time in class was wasted.  In our culture, especially with our heightened focus on STEM education, educational success must be quantifiable and measurable in order to be considered valid.  But there are many benefits to music class that are NOT quantifiable, and we shouldn’t overlook them.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Collaboration and Cooperation</strong></h5>
                            <p>In music class in elementary school, I learned to make music with others. I learned to collaborate with others while practicing and performing in ensembles. I also learned to be tolerant with classmates with a variety of skills.  I learned to be kind and to listen to others and their contributions.  And I began to develop leadership qualities.</p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Brain Growth</strong></h5>
                            <p>
                                In music class, my brain grew and my neural pathways became stronger.  Studies have shown that nothing grows and develops neural pathways in the brain more quickly and efficiently than making music.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Emotional intelligence</strong></h5>
                            <p>
                                I also had opportunities to develop emotional intelligence in music class.  Music awakens emotions in ways that nothing else can.  As we listened to various music selections and talked about them, I could hear and feel passion, peace, stormy anger, intense joy, and much more.  In our discussions of how the music portrayed each emotion, I learned about an entire LIBRARY of emotions, some of which I was not familiar with.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Communication</strong></h5>
                            <p>
                                In music class, I practiced communication skills.  In collaborating with others, discussing music selections in the class, and performing music in front of our parents in our concerts, I began to develop a variety of communication skills.  Among those skills was the ability to stand in front of an audience and share myself with them.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>The Language of Music</strong></h5>
                            <p>
                                Among the more obvious and quantifiable skills, of course, are the skills of reading musical notation.  Music is a language all its own, and one learns to read AND express it as such.  I learned note names, note values, and music vocabulary which introduced me to the Italian language.  And as I learned to read these, I also learned to express myself using this special language.
                            </p>
                            <p>
                                Though not measurable in the same way that knowing our multiplication tables is measurable, music is nonetheless extremely important to students’ education.  Students who may not excel in traditional academic classes often find their niche in the arts or sports. The boost in their self-esteem and self-worth may not be quantifiable, but it is so valuable.  Likewise, the increased academic performance due to brain growth and the growth of neural pathways cannot be measured.  And don’t forget: music is fun!  Every kid needs a break from the daily grind and the opportunity to spend time with something that brings them enjoyment.  All work and no play isn’t healthy for anyone.
                            </p>
                            <p>
                                Music should play a role in every child’s education.  They are more likely to grow up productive, emotionally healthy, and well-rounded when music plays a central role in their schooling.  I think I’m going to track down my husband’s saw in the garage and a spare violin bow and try learning a new instrument.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <p>
                            Written by: Leslie Schmunk – Kardia Classical School’s Music Teacher
                        </p>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page