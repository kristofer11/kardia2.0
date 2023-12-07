

//USED AS TEMPLATE FOR FUTURE BLOG POSTS
//UNCOMMENT AND COPY/PASTE INTO NEW BLOG DOCUMENT


// import Image from 'next/image';
// import styles from '../page.module.scss';
// import AnimateOpacity from '@/components/animations/AnimateOpacity';
// import { Merriweather, Lato } from 'next/font/google'

// const merriweather = Merriweather({
//     subsets: ['latin'],
//     weight: '400',
// })

// const lato = Lato({
//     subsets: ['latin'],
//     weight: ['400', '700', '900'],
// })

// const page = () => {
//     return (
//         <main className={`${styles.blogPost} ${merriweather.className} page-main`}>

//             <article className={`page-content ${styles.blogContent}`}>
//                 <AnimateOpacity>
//                     <section className={`${styles.section} ${lato.className}`}>
//                         <h4 className={styles.blogTitle}>Navigating Screen Time: Striking the Right Balance for Our Children </h4>
//                         <p className={styles.author}>October 9, 2023 by Lacey Hvattum</p>
//                         <figure>
//                             <Image
//                                 src='/blog/tablet.jpg'
//                                 width='2972'
//                                 height='2858'
//                                 alt='Child sitting at counter looking at a tablet with a beverage sitting next to him.'
//                                 className={styles.blogImg}
//                             // className='blog-img col-md-5 col-9'
//                             />
//                         </figure>
//                     </section>
//                 </AnimateOpacity>

//                 <div className='blog-content'>

//                     <AnimateOpacity>
//                         <section className={styles.section}>

//                             <p>
//                                 In today's fast-paced, tech-driven world, screen time management has become a significant concern for parents and educators. As we navigate the digital age, it's crucial to find a balanced approach that upholds our values and educational principles. In this article, we'll delve into the art of nurturing wisdom while managing screen time for our children. Many parents, including myself, often struggle with where to draw the line when it comes to our children's technology use. We'll explore some key challenges and offer general tips for addressing them.
//                             </p>
//                         </section>
//                     </AnimateOpacity>
//                     <AnimateOpacity>
//                         <section className={styles.section}>
//                             <h5 className={`${lato.className} ${styles.heading}`}><strong>The Digital Dilemma</strong></h5>
//                             <p>Screens are ubiquitous, offering both incredible opportunities and potential pitfalls for our children's development. As parents, we encounter the following challenges:</p>
//                             <ol>
//                                 <li>
//                                     <p><strong>Distracted Minds</strong>: Children's excessive screen time often leads to diminished attention spans, making it harder for them to engage deeply in their education.</p>
//                                 </li>
//                                 <li>
//                                     <p><strong>Sedentary Lifestyles</strong>: Prolonged screen use frequently translates to reduced physical activity, which is essential for a healthy lifestyle.</p>
//                                 </li>                    <li>
//                                     <p><strong>Sleep Struggles</strong>: Screens before bedtime disrupt their sleep patterns, affecting the quality of rest and their readiness to learn.</p>
//                                 </li>                    <li>
//                                     <p><strong>Content Concerns</strong>: Unregulated screen time can expose children to inappropriate or conflicting content, posing challenges to their moral and spiritual development.</p>
//                                 </li>                    <li>
//                                     <p><strong>Social Skills</strong>: Too much screen time can limit face-to-face interactions, hindering the development of social skills and the art of conversation.</p>
//                                 </li>

//                             </ol>
//                         </section>
//                     </AnimateOpacity>
//                     <AnimateOpacity>
//                         <section className={styles.section}>

//                             <h5 className={`${lato.className} ${styles.heading}`}><strong>Navigating the Digital Waters</strong></h5>
//                             <p>Balancing screen time for our children requires thoughtful consideration and proactive steps. Here are some general tips for addressing this challenge:</p>
//                             <ol>
//                                 <li>
//                                     <p><strong>Embrace Guiding Principles</strong>: Establish clear boundaries for screen time, focusing on quality over quantity.</p>
//                                 </li>
//                                 <li>
//                                     <p><strong>Cultivate Offline Passions</strong>: Encourage children to explore offline interests like reading, practicing music, engaging in sports, or pursuing hobbies that stimulate both body and mind.</p>
//                                 </li>                    <li>
//                                     <p><strong>Be a Role Model</strong>: Demonstrate a healthy balance of screen time and offline activities as parents or caregivers.</p>
//                                 </li>                    <li>
//                                     <p><strong>Design Tech-Free Zones</strong>: Create sanctuaries where screens are not allowed, such as the dining table and designated tech-free bedrooms.</p>
//                                 </li>                    <li>
//                                     <p><strong> Foster Digital Literacy</strong>: Teach children critical thinking and media literacy skills. Equip them to discern reliable sources, navigate the digital world ethically, and identify potential pitfalls.</p>
//                                 </li>
//                                 <li>
//                                     <p><strong>Encourage Outdoor Adventures</strong>: Organize family outings, gardening projects, or outdoor science classes to reconnect children with the wonders of the natural world.</p>
//                                 </li>
//                                 <li>
//                                     <p><strong>Promote Family Engagement</strong>: Dedicate specific times for family activities, such as meals and discussions. This quality time builds strong bonds and reinforces values.</p>
//                                 </li>                    <li>
//                                     <p><strong>Establish Screen-Free Bedtimes</strong>: Create screen-free routines before bedtime to ensure children get the rest they need for a productive day.</p>
//                                 </li>                    <li>
//                                     <p><strong>Open Dialogue</strong>: Encourage open conversations about online experiences, challenges, and concerns. Provide guidance and support while respecting children's autonomy.</p>
//                                 </li>                    <li>
//                                     <p><strong>Continuous Adaptation</strong>: Regularly reassess your approach and remain flexible in adapting to your children's developmental stages.</p>
//                                 </li>
//                             </ol>
//                         </section>
//                     </AnimateOpacity>
//                     <AnimateOpacity>
//                         <section className={styles.section}>
//                             <p>Balancing screen time for our children is a dynamic process that calls for wisdom and discernment. As parents, we have the privilege of nurturing our children's minds and bodies. By thoughtfully managing screen time, we ensure our children receive the best education while navigating the digital age with virtue and wisdom. The journey may have its challenges, but it's a rewarding one that shapes our children's futures and strengthens family bonds.</p>

//                             <figure className='py-3'>
//                                 <Image
//                                     src='/blog/tablet2.jpeg'
//                                     width='2000'
//                                     height='3000'
//                                     alt='Young child sitting with tablet. He is looking at a menu of games to play.'
//                                     className={styles.blogImg}
//                                 // className='blog-img col-md-8' 
//                                 />
//                             </figure>
//                             <p className={lato.className}>
//                                 By – Lacey Hvattum – Head of School
//                             </p>
//                         </section>
//                     </AnimateOpacity>
//                 </div>
//             </article>
//         </main>
//     )
// }

// export default page