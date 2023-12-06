import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <AnimateOpacity>
            <main className={`${styles.main} page-main`}>
                <h1>Sycamore Login</h1>
                <article className="page-content">
                    <section className={styles.section}>
                        <Image
                            src='/images/sycamore.jpg'
                            width='1111'
                            height='1111'
                            alt='Kardia students doing a science experiment'
                        />
                    </section>
                    <section className={styles.section}>
                        <p>
                            To login to your family account, click <Link href='https://app.sycamoreschool.com/index.php' target='_blank' className={styles.sycamoreLink}>HERE</Link>. Our school code is 4125. You should have been assigned a username and temporary password to start your account. Email office@kardiaclassical.org if you have any questions or need your login information.
                        </p>
                    </section>
                </article>
            </main>
        </AnimateOpacity>
    )
}

export default page