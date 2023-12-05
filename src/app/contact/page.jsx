import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import { Button } from '@mui/material';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

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
                <section className='page-content'>
                    <h2 className='text-center' style={{ color: '#152d7d', fontSize: '2.8rem' }}>We would love to hear from you!</h2>
                    <h4 className='text-center m-4'>You can reach us via phone, email or Facebook Messenger (see the link in the lower right corner).</h4>

                    <p className='contact-text' style={{ fontSize: '1.3rem' }}>Email:
                        <span className={styles.contactLink} id='contact-link'>
                            <Button variant='contained' href='mailto: office@kardiaclassical.org'>office@KardiaClassical.org</Button>
                        </span>
                    </p>

                    <p style={{ fontSize: '1.3rem' }}> Phone:
                        <span className={styles.contactLink}>
                            <Button variant='contained' href='tel: 360-453-7334' >360-453-7334</Button>
                        </span>
                    </p>

                </section>
            </AnimateOpacity>
        </main>
    )
}

export default page