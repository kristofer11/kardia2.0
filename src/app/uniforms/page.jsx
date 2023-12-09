import styles from './page.module.scss';
import Banner from '../../components/Banner/Banner';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>

            <article className="page-content">
                <AnimateOpacity>
                <section className={`${styles.section} ${styles.section1}`}>
                    <h1>Uniforms</h1>                    
                    <div className={`${styles.introDiv} ${styles.section}`}>
                    <p>
                            We will be sticking with the uniform tradition for our in-person days. This year, students will be required to wear formal and daily uniform items. Logo items will be available to order throughout the year. Please see the uniform policy below for more specific information and where to order logo items. Click <a href='http://www.schoolbelles.com/myschool/M37/s2950' target='_blank'>HERE</a> to be relocated to our School Belles uniform page. Our school code is S2950. There are several required items from School Belles.
                        </p>
                        <Image
                            width='640'
                            height='440'
                            src='/images/baloonScience.jpeg'
                            alt='Five Kardia students sitting on the floor in uniform.'
                            className={styles.mainImg}
                        />
                    </div>
                    </section>
                </AnimateOpacity>
                <div className={styles.uniforms1}>
                <AnimateOpacity>
                    <section className={styles.section}>
                        <Image
                            src='/images/uniforms.png'
                            width='1187'
                            height='1536'
                            alt='Several elementary-age students being creative with legos'
                            className={styles.uniformImg}
                        />
                    </section>
                </AnimateOpacity>

                <AnimateOpacity>
                    <section className={styles.section} style={{ marginBottom: '2rem' }}>
                        <p style={{textAlign: 'center'}}><em>These are the uniform requirements for the 2023-2024 school year. Please note that there are several changes.</em></p>
                    </section>
                </AnimateOpacity>
                </div>
                <div className={styles.uniforms2}>
                <AnimateOpacity>
                    <section className={styles.section}>
                        <Image
                            src='/images/prekUniforms.png'
                            width='1545'
                            height='2000'
                            alt='Several elementary-age students being creative with legos'
                            className={`${styles.uniformImg} ${styles.uniformImg2}`}
                        />
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.section} style={{ marginBottom: '2rem' }}>
                        <p style={{textAlign: 'center'}}><em>These are the Pre-K uniform requirements for the 2023-2024 school year.</em></p>
                    </section>
                </AnimateOpacity>
                </div>
            </article>
        </main>
    )
}

export default page