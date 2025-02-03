import styles from './page.module.scss';
import Banner from '../../components/Banner/Banner';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AnimateOpacity from '@/components/animations/AnimateOpacity';
import { fontWeight } from '@mui/system';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/enrollment-alt-banner.jpeg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='homeOverlayText'> Enrollment</h1>
                    </>
                }
                strength='400'
            />
            <article className="page-content">
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h5 className={styles.firstHeader}>
                            <strong>We are a current family, how do I enroll?</strong>
                        </h5>
                        <p style={{ textAlign: 'left' }}>
                            {/* Current Kardia families, please go to your Sycamore Education login page on the “current families” page. Once you are logged in, click on “My School” in the menu on the left-hand side of your screen. Then click on “Enrollment” and then “Online Portal.” You will then be redirected to our online application for enrollment. You can also follow the steps below, but log in under “I already have an account” and use your Sycamore Family username and password to enroll for the new year. Enrollment for current families will open on Wednesday, February 1, 2023. */}
                            If you are a currently enrolled family, there is no need to enroll for next year. Students who are invited to re-enroll will be enrolled automatically, and will have the option to withdraw if they choose not to return. You should have received information via email on updated enrollment dates and tuition. If you did not, please contact <Link variant='contained' href='mailto: office@kardiaclassical.org'> <span style={{ color: 'green', fontWeight: 600 }}>office@KardiaClassical.org</span></Link>.
                        </p>
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={`${styles.section} ${styles.newFamSection}`}>
                        <h5 className={styles.firstHeader}>
                            <strong>We are a new family, How do we apply?</strong>
                        </h5>

                        {/* STYLE THE LINK FOR NEW FAMILIES */}


                        <p style={{ textAlign: 'left' }}>
                            We are glad you are interested in joining our community! Please click <a href='https://sycamore.school/login?schoolId=4125' target='_blank'>HERE</a> to access the new family application (see below for instructions on how to navigate the admissions platform). This link will redirect you to our online application portal. Once you have completed the online application and submitted all required signed forms, you will be called by the Head of School to chat about the next steps. To fully save your place, you will need to mail in enrollment fees to our address listed on the contact page. Enrollment for new families will open on Wednesday, February 15, 2023.
                        </p>
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.cardSection}>
                        <Card className={styles.enrollCard}>
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                1) Click on the register button, and follow the directions given.
                            </Typography>
                            <CardContent>
                                <CardMedia
                                    component='img'
                                    image='/images/enroll/enroll1.png'
                                    alt='Screenshot highlighting the place new families can signup for a new Sycamore account prior to enrollment.'
                                    className={styles.cardImg}
                                />
                            </CardContent>

                        </Card>

                        {/* <Image
                        src='/images/enroll/enroll1.png'
                        width='507'
                        height='363'
                        alt='Screenshot of the login page to Sycamore, our enrollment management site.'
                    />
                    <p><em>Click on the register button, and follow the directions given.</em></p> */}
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.cardSection}>
                        <Card className={styles.enrollCard}>
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                2) As a new family, click on the “I need a new account” register button.
                            </Typography>
                            <CardContent>
                                <CardMedia
                                    component='img'
                                    height='777'
                                    image='/images/enroll/enroll2.png'
                                    alt='Screenshot highlighting the place new families can signup for a new Sycamore account prior to enrollment.'
                                    className={styles.cardImg}
                                />
                            </CardContent>
                        </Card>
                        {/* <Image
                        src='/images/enroll/enroll2.png'
                        width='680'
                        height='480'
                        alt='Screenshot highlighting the place new families can signup for a new Sycamore account prior to enrollment.'
                    />
                    <p><em>As a new family, click on the “I need a new account” register button.</em></p> */}
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.cardSection}>
                        <Card className={styles.enrollCard}>
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                3) Fill out the necessary information to create an account. This will put you in our system and make it so you can save progress and come back to it later if needed. You will not be required to get it all done in one sitting.
                            </Typography>
                            <CardContent>
                                <CardMedia
                                    component='img'
                                    height='777'
                                    image='/images/enroll/enroll3.png'
                                    alt='Screenshot highlighting the place new families can signup for a new Sycamore account prior to enrollment.'
                                    className={styles.cardImg}
                                />
                            </CardContent>
                        </Card>
                    </section>
                </AnimateOpacity>
            </article>
        </main>
    )
}

export default page