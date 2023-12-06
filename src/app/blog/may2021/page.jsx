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
                        <h4 className={styles.blogTitle}>What Does it Mean to be a “Classical School?”</h4>
                        <p className={styles.author}>May 12, 2021 by Kris Hvattum</p>
                        <figure>
                            <Image
                                src='/blog/pillars.jpg'
                                width='1024'
                                height='683'
                                alt='Rows of pillars with bright sun in the background'
                                className={styles.blogImg}
                                style={{ maxWidth: '444px' }}
                            // className='blog-img col-md-5 col-9'
                            />
                        </figure>
                    </section>
                </AnimateOpacity>

                <div className='blog-content'>

                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>
                                What does it mean that Kardia is a “classical” school? When we say that we are classical, we are talking about an innovative yet ancient method of teaching children. In explaining what this type of education entails, it is helpful to think about the three steps involved with learning a new language and relate them to a child’s cognitive development. In the first step, you must acquire the raw materials of the language. In other words, you must memorize a large number of words that don’t yet fit together into eloquent sentences. Next, you must learn how these verbs, nouns, etc. fit together and the rules involved with their usage. Finally, armed with adequate vocabulary and the rules of the particular language, you can hold meaningful conversations and even compose literature of many kinds.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                        <p>
                    In a classical education setting, we recognize that the brains of grammar students are primed to acquire all sorts of facts and data about various subjects-as in the beginning stage of learning a language. You may have noticed younger children rattling off facts about obscure topics, say dinosaurs, simply because they are excited to acquire new information. We start to see a shift of interests in middle school students (also known as logic students). They are more interested in asking “why?” rather than memorizing interesting facts. They want to make sense of the world they have spent over a decade observing. These students thrive in an environment where they are not only encouraged to question things but are taught how to properly reason and think critically. Finally, in the high school years, true proficiency is achieved. As with learning a new language, the last step is where skills have been polished to the point where they are their most meaningful. Students not only understand the subjects in which they have been immersed, but they can eloquently demonstrate it. This is called the rhetoric stage because the student is able to apply the rules learned in the logic stage and expertly and persuasively communicate.
                </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                        <p>
                    Kardia Classical School is committed to classical education because of the difference we have seen it make in students over the many years our teachers and parents have been implementing it. Our curriculum focuses on pairing developmentally appropriate methods with training in virtue and spiritual development. Our hybrid model of in-class and at-home work allows parents to have a hand in their child’s education while benefiting from the planning, lessons, and support of certified teachers who are passionate about classical education.
                </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                            <p className={lato.className} style={{fontSize: '1.3rem'}}>
                                By – Kris Hvattum – Kardia Board Member
                            </p>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page