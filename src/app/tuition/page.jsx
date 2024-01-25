import styles from './page.module.scss';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <AnimateOpacity>
            <main className={`${styles.main} page-main`}>
                <h1>Tuition & Fees</h1>
                <article className="page-content">
                    <section className={styles.cardSection}>
                        <Card className={styles.enrollCard}>
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontSize: '1.8rem' }}>
                                Accepting applications for the 2024-25 school year starting February 15th!
                            </Typography>
                            <CardMedia
                                component='img'
                                height='777'
                                image='/images/enroll/2024-25-tuition.jpg'
                                alt='Charts displaying tuition prices.'
                                className={styles.cardImg}
                            />
                        </Card>
                    </section>
                    <section>
                        <p><strong>Please note, there is a $50 per family application fee for new families.</strong><em> This is a one-time fee.</em></p>
                    </section>
                    <section>
                        <p >
                            Visit our <a href='/Programs'>Program Options</a> page to see all of the options for the 2024-2025 school year.
                        </p>
                    </section>
                </article>
            </main>
        </AnimateOpacity>
    )
}

export default page