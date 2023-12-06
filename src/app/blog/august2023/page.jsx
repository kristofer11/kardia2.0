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
                        <h4 className={styles.blogTitle}>Classical Roots: The Importance of &#34;The Lost Tools of Learning&#34; by Dorothy Sayers</h4>
                        <p className={styles.author}>August 29, 2023 by Kris Hvattum</p>
                        <figure>
                            <Image
                                src='/blog/dorothy-sayers-232x300.jpg'
                                width='232'
                                height='300'
                                alt='Portrait of Dorothy L Sayers, apologist and spiritual writer. She authored the essay The Lost Tools of Learning'
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
                                In the realm of educational philosophy, certain texts stand as timeless guides, continually shedding light on the path to effective and meaningful learning. One such beacon is Dorothy Sayers' essay, <em>The Lost Tools of Learning.</em> Written in 1947, this essay remains a cornerstone of the classical education revival and offers profound insights into the art of teaching and learning. Let's delve into the importance of <em>The Lost Tools of Learning</em> and why it continues to resonate with educators, parents, and students alike.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <ol>
                                <li>
                                    <h5>Reviving Classical Education</h5>
                                    <p>Personalized Learning: AI enables personalized learning experiences tailored to individual students&#39; needs. It can analyze strengths, weaknesses, and learning styles to provide customized content, helping students stay engaged and motivated.</p>
                                </li>
                                <li>
                                    <h5>Three-Part Curriculum</h5>
                                    <p>Sayers proposed a three-part curriculum based on the stages of the Trivium: Grammar, Logic, and Rhetoric. This approach aligns with the natural cognitive development of students and provides a structured framework for educators to follow.</p>
                                    <p><em>Grammar Stage</em>: In this stage, students absorb facts and rules. They acquire foundational knowledge, much like a child learns vocabulary and basic rules of grammar.</p>
                                    <p><em>Logic Stage</em>: Building on the grammar stage, students in the logic stage learn to think critically and analyze information. This stage is about making connections and forming logical arguments.</p>
                                    <p><em>Rhetoric Stage</em>: In the final stage, students learn the art of persuasive communication. They use their knowledge and logical thinking to express themselves effectively.</p>
                                </li>
                                <li>
                                    <h5>Lifelong Learning</h5>
                                    <p><em>The Lost Tools of Learning</em> emphasizes the importance of teaching students how to learn, rather than simply what to learn. This skill is invaluable in a rapidly changing world where adaptability and problem-solving are highly prized.</p>
                                </li>
                                <li>
                                    <h5>Integration of Subjects</h5>
                                    <p>Sayers argued for an integrated approach to education, where subjects are interconnected rather than taught in isolated silos. This approach fosters a deeper understanding of the relationships between disciplines and encourages holistic thinking.</p>
                                </li>
                                <li>
                                    <h5>Nurturing Imagination</h5>
                                    <p>Sayers recognized the role of imagination in education. She believed that by immersing students in great literature, they could explore different perspectives, develop empathy, and cultivate their imagination. This approach helps students become well-rounded individuals.</p>
                                </li>
                                <li>
                                    <h5>Educational Reform</h5>
                                    <p><em>The Lost Tools of Learning</em> has played a pivotal role in educational reform efforts worldwide. It has inspired the establishment of classical schools and homeschooling curricula that adhere to Sayers' principles.</p>
                                </li>

                                <li>
                                    <h5>Adaptation to Modern Times</h5>
                                    <p>While Sayers&#39; essay was written in a different era, its principles remain adaptable to modern educational contexts. The focus on critical thinking, effective communication, and lifelong learning aligns with the demands of the 21st century.</p>
                                </li>

                            </ol>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <p>In conclusion, <em>The Lost Tools of Learning</em> by Dorothy Sayers continues to be an influential work that challenges traditional educational paradigms and offers a roadmap for a more effective and meaningful approach to learning. Its enduring relevance lies in its promotion of critical thinking, integration of knowledge, and the cultivation of well-rounded individuals. As educators, parents, and students continue to seek innovative ways to navigate the complex landscape of education, Sayers&#39; essay remains a beacon of wisdom and a source of inspiration.</p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <a href='https://www.pccs.org/wp-content/uploads/2016/06/LostToolsOfLearning-DorothySayers.pdf' target='_blank' > Read <em>The Lost Tools of Learning</em></a>
                            <Image
                                width='310'
                                height='455'
                                src='/blog/LostToolsCover.jpg'
                                alt='Cover of The Lost Tools of Learning by Dorothy Sayers, an important work in the foundations and promotion of Classical Christian private schools.'
                                className={styles.blogImg}
                                style={{marginBottom: '2rem'}}
                            />
                        </section>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page