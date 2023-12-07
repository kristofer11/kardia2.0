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
                        <h4 className={styles.blogTitle}>25 Ways To Keep Younger Siblings Busy During Homeschooling</h4>
                        <p className={styles.author}>JUNE 1, 2022 by Joanna Bischoff</p>
                        <figure>
                            <Image
                                src='/blog/baby.jpg'
                                width='1024'
                                height='683'
                                alt='Baby with blanket on head'
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
                                In today&#39;s fast-paced, tech-driven world, screen time management has become a significant concern for parents and educators. As we navigate the digital age, it&#39;s crucial to find a balanced approach that upholds our values and educational principles. In this article, we&#39;ll delve into the art of nurturing wisdom while managing screen time for our children. Many parents, including myself, often struggle with where to draw the line when it comes to our children&#39;s technology use. We&#39;ll explore some key challenges and offer general tips for addressing them.
                            </p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <p style={{width: '100%'}}>Would you like to homeschool, but aren’t sure what to do with all the different ages?</p>
                            <p>If you don’t have access to daycare options (or a family that’s got the time!), then you may find yourself juggling little ones and the needs for the attention of the school-aged child. Of course, they can play with their toys, etc, but at some point, they’ll need another option! Every child and every family is different in dynamic, but for these first few pivotal years, it helps to have quick go-to ideas! </p>

                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>

                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Babies</strong></h5>
                            <p>They can play with the same toys at this age and not get too bored! Try taking them out in fresh air if you can—it works wonders, especially with babies. Soft music can be soothing, too. Flexibility is really key when you’ve got an infant in the house, and that applies in homeschooling, too! One of the best ways is to have things prepped in such a way that the school-aged sibling can do work independently. Also, sometimes your key school times for one-on-one interaction are going to be those precious nap times! Some babies do great in a bouncer if they can see the family working. Give yourself and your homeschooling grace in this season!</p>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Toddlers</strong></h5>
                            <p>The older your baby gets, the bigger the range of options! At this age, they want a little more challenge and, thankfully, have slightly longer play periods. They also can play independently at these ages. One way to handle it is to have “stations” or perhaps boxes that you switch out one at a time. </p>


                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <ol>
                                <li>Sensory boxes</li>
                                <li>Coloring pages or books</li>
                                <li>Magnetic building blocks</li>
                                <li>Cookie sheet with magnetic shapes, blocks, or letters</li>
                                <li>Anything that involves putting things into containers. Recycle an oatmeal can, for instance, and put large objects or toys in and out of it.</li>
                                <li>If you’re brave, chocolate pudding “finger paint”; it will get messy!</li>
                                <li>High chair time with snacks or even an activity-if they’re the sitting type!</li>
                                <li>Solid Tempera Paint Sticks for washable painting fun!</li>
                                <li>Wagon wheel dry pasta with pipe cleaners for patterning, making shapes, and more</li>
                            </ol>
                        </section>
                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <figure className='py-3'>
                                <Image
                                    src='/blog/toddlerImg.jpg'
                                    width='1024'
                                    height='679'
                                    alt='Toddler playing with books and toys'
                                    className={styles.blogImg}
                                    style={{ maxWidth: '444px' }}
                                // className='blog-img col-md-8' 
                                />
                            </figure>
                        </section>
                    </AnimateOpacity>

                    <AnimateOpacity>
                        <section className={styles.section}>
                            <h5 className={`${lato.className} ${styles.heading}`}><strong>Preschoolers</strong></h5>
                            <p>Once your littles reach the older ages, they can sit for longer periods of time-but, not usually the full amount of school time! They’ll get longer times for their “stations” (or however you plan it), but they still will wander quite a bit between activities. There are some great at-home preschool curriculum options, but you’ll want more for them to do! Here are some ideas: </p>
                            <ol style={{width: '100%'}}>
                                <li>Foam or stacking blocks</li>
                                <li>Duplos</li>
                                <li>Magnetic blocks</li>
                                <li>Dress-up sets or wooden dress-up dolls</li>
                                <li>Coloring books</li>
                                <li>Whiteboard + easy wash marker</li>
                                <li>Dot paint</li>
                                <li>Self-inking stamps +paper</li>
                                <li>Stiff cardstock and glue sticks-purple will tell you where the glue is!</li>
                                <li>Early scissors skills</li>
                                <li>Kinetic sand with tools or small hard plastic animals in a tall-sided box!</li>
                                <li>Linking blocks or similar</li>
                                <li>Playdough and tools</li>
                                <li>Shaving cream on the table or in a bag</li>
                                <li>Puzzles</li>
                                <li>Books, especially simple look and finds</li>
                            </ol>

                        </section>
                    </AnimateOpacity>

                    <AnimateOpacity>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <figure className='py-3'>
                                <Image
                                    src='/blog/blocks.jpg'
                                    width='768'
                                    height='1024'
                                    alt='Young child building with blocks'
                                    className={styles.blogImg}
                                // className='blog-img col-md-8' 
                                />
                            </figure>
                        </div>

                    </AnimateOpacity>
                    <AnimateOpacity>
                        <section className={styles.section}>
                            <p>Most of the time, the younger siblings like to be involved and feel like they’re a part of it. We do Bible storytime on the couch; many homeschooling families have a “morning basket”. Also, we were able to have three desks, and although our youngest at the time wasn’t really of an age to sit at it, I knew the ownership of space would quickly come into play. If you have a shelf with desk “stations” you’ll want to quickly make space for the youngest kids!</p>
                            <p>One of the most helpful things we’ve found as a homeschooling family is having Kardia’s curriculum. They offer videos for the harder subjects, a daily schedule, and a suggested curriculum list! It’s been a lifesaver for time and energy—and, often, the older ones will watch a (short) video and then do their lesson while I’m getting the youngest settled, changed, cleaned up, or otherwise responded to. If you don’t live in the local area, they do offer a full online tuition option. Check it out here! </p>
                            <p>Also, feel free to download this fun and handy printable pdf below of younger sibling activity ideas, so that you’ve got something to have in hand! Enjoy! Let us know if you’ve got more suggestions for things for siblings to do! </p>
                        </section>
                    </AnimateOpacity>

                    <AnimateOpacity>
                        <p style={{ fontSize: '1.3rem' }}>
                            For more great information from Joanna Bischoff, visit her blog at <a src='https://homelifepurpose.com/' style={{ color: 'blue' }}>https://homelifepurpose.com/</a>
                        </p>
                    </AnimateOpacity>

                </div>
            </article>
        </main>
    )
}

export default page