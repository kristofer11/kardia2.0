import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <h1>Donations</h1>
            <article className="page-content">
            <section className={styles.section}>
                    <Image
                        src='/images/science.jpg'
                        width='2048'
                        height='1536'
                        alt='Kardia students doing a science experiment'
                    />
                </section>
                <section className={styles.section}>
                    <p style={{ textAlign: 'left' }}>
                        Kardia Classical School is a nonprofit private education organization and every bit of money that we raise or is donated goes back to the school and our students. Our goal is to help our program to grow over the next few years. As we grow, we will need a larger space to meet, more quality teachers, materials, and more! We are constantly looking for ways to enhance our program and offer the best to our students and families. Thank you for considering donating to our wonderful little school and our amazing students.
                    </p>
                </section>
                <section className={styles.section}>
                    <h6 id='what-is-cc-subtitle'>
                        <em>Click on one of the links below to donate, either via PayPal or Venmo.</em>
                    </h6>
                    <div className={styles.donationLinkDiv}>
                        <Link
                            href='https://www.paypal.com/donate/?hosted_button_id=WAEDRZYKQJJBE'
                            target='_blank'
                        >
                            <Image
                                width='145'
                                height='44'
                                src='/images/paypal.png'
                                alt='Paypal logo linking to Kardia donation page.'
                                className={styles.donationLink}
                            />
                        </Link>
                        <Link
                            href='https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.venmo.com%2Fu%2Fkardiaclassicalschool&data=05%7C01%7C%7C358b0343fe0b4bfe8b2e08dbbeeac69a%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638313687802808850%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=8BCTNeol6ZA9IjzBrPtdmxTcZ0bGvaP3lT0f89%2FcNNw%3D&reserved=0'
                            target='_blank'
                        >
                            <Image
                                width='424'
                                height='84'
                                src='/images/venmo.webp'
                                alt='Venmo logo linking to Kardia donation page.'
                                className={styles.donationLink}
                            />
                        </Link>
                    </div>
                </section>
                <section className={styles.section}>

                    <p style={{ textAlign: 'left' }}>
                    <strong>Your contributions may be tax-deductible</strong>. Kardia Classical School’s Tax ID is #85-1947905. We are an IRS-designated 501 (c)(3) non-profit organization. Please contact your tax advisor for tax deduction advice.
                    </p>
                </section>
            </article>

        </main>
    )
}

export default page