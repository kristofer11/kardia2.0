import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import AnimateOpacity from '@/components/animations/AnimateOpacity';
import ContactForm from '@/components/contactForm/ContactForm';

const page = () => {
    return (
        <main className={`page-main ${styles.contactMain}`}>
            <Banner
                img='/banners/contact-banner.jpeg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='homeOverlayText'> Contact</h1>
                        <h1 className='homeOverlayText'> Kardia</h1>
                    </>
                }
                strength='400'
            />
            <AnimateOpacity>
                <section className={`page-content ${styles.contactContent}`} style={{ maxWidth: '98vw' }}>
                    <h2 className='text-center' style={{ color: '#152d7d', fontSize: '2.8rem' }}>We would love to hear from you!</h2>
                    <div className={styles.contactDiv}>
                        <Image
                            height='555'
                            width='555'
                            src='/images/prek-playground.jpeg'
                            alt='Pre Kindergarten students playing on playground'
                        />
                        <div className={styles.linkDiv}>
                            {/* <h4>You can reach us via the contact form, phone, email or Facebook Messenger</h4> */}
                            {/* <h5 className='m-2'>(Look for a the link for Messenger in the lower right corner of any page.)</h5> */}

                            <div className={styles.formDiv}>
                                <ContactForm />
                            </div>

                        </div>
                    </div>
                </section>
            </AnimateOpacity>
            <section>
                <div className={styles.contactText} style={{ fontSize: '1.3rem', marginTop: '3rem' }}>
                    <span>Email:</span>
                    <span className={styles.contactLink} id='contact-link'>
                        <Link variant='contained' href='mailto: office@kardiaclassical.org'> office@KardiaClassical.org</Link>
                    </span>
                </div>

                <div className={styles.contactText} style={{ fontSize: '1.3rem', marginBottom: '3rem' }}>
                    <span>Phone:</span>
                    <span className={styles.contactLink}>
                        <Link variant='contained' href='tel: 360-453-7334'> 360-453-7334</Link>
                    </span>
                </div>
            </section>
        </main>
    )
}

export default page