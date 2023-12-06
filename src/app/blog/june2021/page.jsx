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
                        <h4 className={styles.blogTitle}>What Does “Parent Partnership” Mean?</h4>
                        <p className={styles.author}>June 18, 2021 by Lacey Hvattum</p>
                        <figure>
                            <Image
                                src='/blog/apple-books.jpg'
                                width='1024'
                                height='723'
                                alt='stack of books with an apple on top, colored pencils, and ABC blocks on a table.'
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
                                We have all heard the phrase “parents know best!” and it is true that no one prioritizes your child’s development as much as you do. At the same time, we should remember that there is no substitute for a trained professional when it comes to education, and no better situation for a child than to have parents and teachers working in concert. Children really have the best of both worlds when these two important people in their lives work together to facilitate a positive and successful learning environment. You may be asking yourself how this partnership can work in a hybrid model school. Yes, our students are homeschooling part-time and, in the classroom, part-time, however, this model lends itself to a greater need for communication between parents and teachers. With this added communication, the students are taught in a way that best suits them and their individual needs at home and in the classroom.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <p>
                                The five main pillars of our parent partnership have been carefully crafted to make sure that we are all doing our best to make each child’s school year a successful one. First, we are a community of faith-based families who support a faith-based education. It is so important to be on the same page when it comes to foundational beliefs. Second, we have a structured environment with accountability and grace. We want our students to know that they will be held accountable for their work and their actions, but there is also grace when needed. Third, we have high academic expectations at home and school. We have seen repeatedly throughout the years, that when you set high academic standards, children will often surprise you by meeting and even exceeding those standards. They are more capable than we often give them credit for. Fourth, we believe in educating the whole child: mind, body, and soul. Education is not just about academics. It is about seeking truth, goodness, and beauty in everything that we see and do. We want to help instill virtue in our students so that when they go out into the world, they will be able to positively impact their community. Fifth, our goal is to create a culture of lifelong learners. Education is not only a privilege that not all children get, but it is something that should be continued throughout their lives. We should always work towards bettering ourselves and continuing the journey of being image-bearers of Christ.
                            </p>
                        </section>
                    </AnimateOpacity>
                   
                    <AnimateOpacity>
                            <p className={lato.className} style={{fontSize: '1.3rem'}}>
                                By – Lacey Hvattum – Head of School
                            </p>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page