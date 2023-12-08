import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/hikingpath.jpeg'
                alt='Mother enjoying a hike through the forest with young girl.'
                title={
                    <>
                        <h1 className='homeOverlayText'> What is a</h1>
                        <h1 className='homeOverlayText'> Parent Partnership?</h1>
                    </>
                }
                strength={300}
            />

            <article className="page-content">
                <AnimateOpacity>
                <section className={styles.section}>
                    <h5 className={styles.firstHeader}>
                        <strong>Faith-based families supporting a faith-based education:  </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        Our families are committed to Christ in all that we say and do. We bind our curriculum together with a biblical worldview and promote a life lived for Christ.
                    </p>
                </section>
                </AnimateOpacity>
                <AnimateOpacity>
                <section className={styles.section}>
                    <h5 id='what-is-cc-subtitle'>
                        <strong>A structured environment with accountability and grace:  </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        We know that with school primarily done at home, that life can get in the way of everyday routine. Our program is flexible enough to work with each family in the routine that is their best fit. Families are held accountable to get the work done but are given tools to be even more successful in those busy moments.
                    </p>
                </section>
                </AnimateOpacity>
                <AnimateOpacity>
                <section className={styles.section}>
                    <h5 id='what-is-cc-subtitle'>
                        <strong>High academic expectations at home and school:  </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        We hold each child to high academic standards and know that they are capable of meeting those standards. With parent help at home, we are able to help each child live to their full academic potential. With these high standards, comes accountability from parents and teachers to do their best, as well as grace when things don’t go as planned.
                    </p>
                </section>
                </AnimateOpacity>
                <AnimateOpacity>
                <section className={styles.section}>
                    <h5 id='what-is-cc-subtitle'>
                        <strong>Creating a culture of life-long learners: </strong>
                    </h5>
                    <p style={{ textAlign: 'left' }}>
                        Education is a privilege and we want our students to see it as such. Parents will educate their children at home while modeling a passion for learning to help create a lifelong learner in each of their children.
                    </p>
                </section>
                </AnimateOpacity>
                <AnimateOpacity>
                <section className={styles.section}>
                    <Image
                        src='/images/christmas2023.jpeg'
                        width='640'
                        height='480'
                        alt='Kardia students performing at their Christmas event.'
                    />
                </section>
                </AnimateOpacity>

            </article>

        </main>
    )
}

export default page