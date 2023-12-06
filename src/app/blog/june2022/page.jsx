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
                        <h4 className={styles.blogTitle}>Five Best Practices For Retaining School Learning Over A Long Break (aka, Summer!)</h4>
                        <p className={styles.author}>June 23, 2022 by Joanna Bischoff</p>
                        <figure>
                            <Image
                                src='/blog/popsicle.jpg'
                                width='768'
                                height='512'
                                alt='Happy child holding popsicles'
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
                                Has the pandemic affected your kids’ education? So many of our kids have been impacted in their studies! Now more than ever, there’s a need to not only keep what you have learned so far but catch back up, too!
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>Not only that but we are constantly bombarded with distractions and entertainment. Although these often are good in moderation, how can you keep your kids’ brains engaged over the summer break?</p>
                            <p>If, as it’s been said, kids lose 2 ½ months of learning over the summer, how can you help your kids get a good start next year, without losing all that learning? Here are some ways that we’ve come up from years of educational experience to help your kids retain their learning:</p>
                            <ol>
                                <li>
                                    <h6>Daily Reading</h6>
                                    <p>Try setting a timer for them, and helping them to pick out stories or facts that they are excited about. Libraries, book clubs, and more can help. You might try a series of classics, or perhaps reward them with watching the movie for it once they read the novel (The Lion, The Witch, and The Wardrobe; Anne of Green Gables; Little Women; there are so many available now!)</p>
                                </li>
                                <li>
                                    <h6>Daily Math Fact Practice</h6>
                                    <p>Taking a few minutes per day to practice their math skills (addition, subtraction, multiplication, division) can really help them surge ahead instead of lagging behind. Flashcards, singing, or even some sort of game can really help! There are also online games and programs for a once-a-week treat (try Fridays) to change it up and keep it interesting!</p>
                                </li>
                                <li>
                                    <h6>Daily Bible Reading</h6>
                                    <p>If you’re so inclined, you can even give them “home” memory verses each week. If they are young, find a good time to read the Bible to them daily when you first wake up, or when they go to bed, are both easy to keep consistent. If they are older kids, you might make a reading schedule for them-Psalms, Proverbs, and the Gospels are especially relatable for many beginners.</p>
                                    <p>Either way, keeping this one element in your life over a break can help in so many, many ways. Try it and see what difference it makes for your family!</p>
                                </li>
                                <li>
                                    <h6>Other Special Interests</h6>
                                    <p>A wonderful way to encourage kids to learn (and yourself, for that matter!) is to specialize in whatever they are passionate about. Cars, engineering, fashion design, animals, reading and writing, foreign languages, sports…using this to create excitement about retaining their learning can be a key way to have actual fun!</p>
                                    <p>Maybe you can discuss math fractions during a baking activity. Or shoot a hoop for every math fact recited. Make an artistic drawing of spelling words (we’ve done that one!). Play songs in a foreign language when driving. Taking a road trip? Find some audiobooks the whole family can enjoy!</p>
                                </li>
                            </ol>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <p>
                                Whatever you choose to do, having a consistent habit of some activities that boost learning and reinforce what they’ve learned will help them be more confident when they return, and it only takes a simple application for a few minutes each day. Building a habit of learning will At the end of the break, you and your kids will be glad that you made the commitment!
                            </p>

                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <p style={{fontSize: '1.3rem'}}>
                            For more great information from Joanna Bischoff, visit her blog at <a src='https://homelifepurpose.com/' style={{color: 'blue'}}>https://homelifepurpose.com/</a>
                        </p>
                    </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page