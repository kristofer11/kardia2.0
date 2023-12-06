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
                        <h4 className={styles.blogTitle}>Can Martial Arts Integrate Well into a Classical Education?</h4>
                        <p className={styles.author}>JULY 4, 2022 by Lacey Hvattum</p>
                        <figure>
                            <Image
                                src='/blog/martialArts.jpg'
                                width='1024'
                                height='681'
                                alt='Child in martial arts pose on beach with sunset'
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
                            We recently partnered with Active Martial Arts out of Mill Creek for our physical education (PE) program. Our students will be doing one hour of martial arts each week in place of a more traditional PE class. The more we thought about the practice of martial arts the more excited we got about how well it seems to fit within the classical methodology.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>The three stages of classical education are grammar, logic, and rhetoric. As a kindergarten through eighth-grade campus, our focus is more on the grammar and logic stages. In the grammar stage, the main goal is for the students to work on building their foundation of knowledge through the memorization of facts. This is accomplished by repetition in chants, songs, movements, written work, visual aids, and so much more. We want our students to experience learning with their whole body! In the logic stage, middle school students are at a time in their life where it is natural for them to question everything and even be a bit argumentative. Our goal in this stage is to take the foundation of knowledge that they worked on in the grammar phase and build upon it. However, the focus now is getting them more consistently to a deeper level of thinking, correctly questioning what they are learning so they know the “why” behind the questions and answers, as well as helping them develop an eloquent way to question and answer questions they may be asked. Our overarching theme across all three stages is that students are constantly seeking truth, goodness, and beauty in all things while filtering the world through our Christian lens.</p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>At this point, you may be asking yourself how this all relates to the study of martial arts. In the typical martial arts classroom, there are many discussions about what it means to have discipline and what virtues that incorporates. Students get the opportunity to practice this during each session as they are held to a high standard of respecting authority and those around them, self-control, determination, perseverance, and so much more. Students develop patience as they strive to accomplish more difficult skills as they progress in the program, and they are encouraged in failure and success. Learning martial arts is a full-body experience where the mind, body, and soul are engaged.</p>
        
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <p>At Kardia Classical School, one of our main goals is to teach the whole child. A child is not just their brain, their body, or their soul. They are all three working as one and learning new skills while using all three will be the most beneficial and reap the best rewards. The study of martial arts and the methodology of classical education can be a beautiful marriage that complements each other in many ways. We can’t wait to see all that our students learn in martial arts this coming year, and how it affects their overall education.</p>
                            <p>For more information on local martial arts classes, check out <a href='https://activemillcreek.com/' target='_blank'>http://activemartialartsmillcreek.com/</a></p>
                            <p className={lato.className}>
                                By – Lacey Hvattum – Head of School
                            </p>
                        </section>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page