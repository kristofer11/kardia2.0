import Banner from '@/components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AnimateOpacity from '@/components/animations/AnimateOpacity';
import SponsorLink from '@/components/sponsor/SponsorLink';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/paper-md.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Annual Auction</h1>
                        {/* <h1 className='overlay-text' style={{ fontSize: '3rem', marginLeft: '4rem' }}><em>Heart of Gold</em></h1> */}
                    </>
                }
                strength='400'
            />
            <article className="page-content">
                <AnimateOpacity>
                    <section className={`${styles.section} ${styles.generalInfo}`}>
                        <h5 className={styles.firstHeader}>
                            <strong>Check back for more info about our annual auction</strong>
                        </h5>
                        <p style={{ textAlign: 'left' }}>
                            Each year, our nonprofit hosts an annual auction in March to support our mission and programs. It&apos;s a special event that brings our community together for a great cause. As the date approaches, we&apos;ll share more details and provide links to our website where you can learn how to participate, donate, or sponsor. Stay tuned—we look forward to having you join us!
                        </p>
                    </section>
                </AnimateOpacity>
                <section className={`${styles.section} ${styles.generalInfo}`}>
                    <h5 className={styles.header}>
                        <strong>Thanks to our 2025 sponsors for your generous support!</strong>
                    </h5>
                    <div
                    style={{marginTop: '1rem'}}
                    >
                    <SponsorLink
                        imageUrl='/images/whitfields-logo.png'
                        companyName='Whitfields Licensing'
                        url='https://www.whitfieldslicensing.com/'
                        level='Platinum Sponsor'
                        imageAlt='Whitfields Auto Licensing Logo'
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    </div>
                    <div className={styles.sponsors}>
                    
                    <SponsorLink
                        imageUrl='/images/kfc-logo.png'
                        companyName='KFC Snohomish'
                        url='https://locations.kfc.com/wa/snohomish/1209-avenue-d?fbclid=IwY2xjawLzz2ZleHRuA2FlbQIxMAABHbfC2oyoeZrlRSVx19dt4bhpbCUeAPlBs1KQg2ctdAns6bBwZP7-uGu01A_aem_wy_JNwtiX7aMneCNCrzj-w'
                        level='Bronze Sponsor'
                        imageAlt='KFC Snohomish Logo'
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    <SponsorLink
                        imageUrl='/images/schultz-logo.jpg'
                        companyName='Schultz Financial'
                        url='https://www.schultzfinancialpartners.com/advisor/e477c3edd9b3db8ea5e31cd5bfc2a855/krystal-schultz'
                        level='Bronze Sponsor'
                        imageAlt='Schultz Financial Logo'
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                    </div>
                </section>
                {/* <div className={styles.auctionImgDiv}>
                <Link href='https://fundraiser.support/KardiaClassical2025' target='_blank' ><Image
                    src='/images/2025_auction.jpg'
                    width='900'
                    height='900'
                    alt='information about the 2024 annual auction supporting Kardia Classical School'
                    className={styles.auctionImg}
                /></Link>
                <h4>Click on the image to go to the auction site.</h4>
                <h3>Open from Friday March 21st at 7pm to Sunday March 23rd at 7pm</h3>
            </div> */}
            </article>
        </main>
    )
}

export default page