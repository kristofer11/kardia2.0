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
                        <h4 className={styles.blogTitle}>Unveiling the Complex Realities of AI Integration in Education</h4>
                        <p className={styles.author}>JULY 14, 2023 by Kris Hvattum</p>
                        <figure>
                            <Image
                                src='/blog/chatgpt.jpg'
                                width='1920'
                                height='1280'
                                alt='Cell phone displaying information about the inception of ChatGPT with a ChatGPT logo in the background'
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
                                Artificial Intelligence (AI) has made its way into the realm of education, including private schools. There is no getting around it, students are already aware of ChatGPT and are taking advantage of it, for better or for worse. As educators, we must do our due dilligence to take advantage of this technology when appropriate, yet safeguard students from potential pitfalls. In this article, we&#39;ll explore the potential benefits of AI in private school education while keeping a keen eye on academic honesty and the temptation to take shortcuts.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <h5 className={`${lato.className} ${styles.heading}`}>
                                <strong>Potential Advantages of AI in Education</strong>
                            </h5>
                            <p>Screens are ubiquitous, offering both incredible opportunities and potential pitfalls for our children&#39;s development. As parents, we encounter the following challenges:</p>
                            <ol>
                                <li>
                                    <p>Personalized Learning: AI enables personalized learning experiences tailored to individual students&#39; needs. It can analyze strengths, weaknesses, and learning styles to provide customized content, helping students stay engaged and motivated.</p>
                                </li>
                                <li>
                                    <p>                        Enhanced Student Support: AI-powered tools like virtual assistants and chatbots offer immediate and accessible support to students. They can provide answers to questions, explanations of concepts, and additional resources, assisting students even outside traditional classroom hours.</p>
                                </li>
                                <li>
                                    <p>                        Data-Driven Insights: AI will undoubtedly allow for the collection and analysis of educational data, providing valuable insights to educators. These insights can help teachers make informed decisions, refine their teaching methods, and provide targeted assistance to students.</p>
                                </li>
                                <li>
                                    <p>                        Intelligent Content Recommendations: AI algorithms can suggest relevant educational resources based on student interests and learning progress. This tailored content curation fosters engagement and encourages self-directed exploration.</p>
                                </li>
                            </ol>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <figure className='py-3'>
                                <Image
                                    src='/blog/onComputer.jpg'
                                    width='1920'
                                    height='1280'
                                    alt='Young child sitting with tablet. He is looking at a menu of games to play.'
                                    className={styles.blogImg}
                                    style={{ maxWidth: '444px' }}
                                // className='blog-img col-md-8' 
                                />
                            </figure>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}>
                                <strong>Disadvantages of AI in Education</strong>
                            </h5>

                            <ol>
                                <li>
                                    <p>Ethical Considerations: The use of AI in education raises ethical concerns, particularly regarding data privacy and security. School leaders must prioritize transparent data practices, secure data storage, and adhere to data protection regulations to maintain trust and protect students&#39; privacy.</p>
                                </li>
                                <li>
                                    <p>Balancing Technology and Human Interaction: While AI can enhance learning experiences, maintaining a balance between technology and human interaction is crucial. Preserving the vital teacher-student relationship and promoting critical thinking skills require an approach that combines the benefits of AI with genuine human connection.</p>
                                </li>
                                <li>
                                    <p>Fostering Academic Integrity: While AI offers assistance, it&#39;s essential to emphasize the importance of academic honesty. It is unfortunately becoming far too easy for students to cheat. Tools are available to detect the usage of AI in papers students turn in, however, it is far more important that we foster a culture of integrity and appreciation for satisfaction rigorous academic work brings.</p>
                                </li>
                            </ol>
                        </section>
                    </AnimateOpacity>

                    <AnimateOpacity>
                        <section className={styles.section}>
                            <h5 className={`${lato.className} ${styles.heading}`}>
                                <strong>Conclusion</strong>
                            </h5>
                            <p>
                                AI presents both advantages and challenges in private school education. As educators, we embrace the potential benefits while being mindful of ethical considerations, maintaining the teacher-student relationship, and fostering academic integrity. By navigating these aspects carefully, we can harness the power of AI to create meaningful and impactful learning experiences while upholding the values and principles that guide private school education.
                            </p>
                            <p className={lato.className}>
                                By – Kris Hvattum – Kardia Board Member
                            </p>
                        </section>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page