import styles from './page.module.scss';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <h1>Tuition & Fees</h1>
            <article className="page-content">
                <section className={styles.cardSection}>
                    <Card className={styles.enrollCard}>
                        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
                        Now accepting applications for the 2023-2024 school year!
                        </Typography>
                            <CardMedia
                                component='img'
                                height='777'
                                image='/images/enroll/tuitionChart2023-24.png'
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
                        Visit our <a href='/Programs'>Program Options</a> page to see all of the options for the 2023-2024 school year.
                    </p>
                </section>
            </article>

        </main>
    )
}

export default page