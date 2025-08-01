import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>

            <article className={`page-content`}>
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h1>Calendar</h1>
                        <p >
                            Here is the calendar for the 2025-2026 School Year! Please keep in mind that dates are subject to change, however, we will give plenty of notice if anything needs to be adjusted. Whenever there are changes to the calendar, it will be updated here as well.<br /><strong>Click on the calendar below to <Link href='downloads/2025-2026-calendar.pdf' download='2025-2026 Kardia Calendar.pdf' target='_blank'>download</Link>.</strong>
                        </p>
                        <Link
                            href='downloads/2025-2026-calendar.pdf'
                            download='2025-2026 Kardia Calendar.pdf'
                            target='_blank'
                        >
                            <Image
                                src='/images/2025-2026-calendar.jpg'
                                width='680'
                                height='880'
                                alt='2024-25 school calendar'
                            />
                        </Link>
                    </section>
                </AnimateOpacity>
            </article>
        </main>
    )
}

export default page