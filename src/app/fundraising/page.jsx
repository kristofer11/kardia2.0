import Banner from '../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Button from '@mui/material/Button';
import AnimateOpacity from '@/components/animations/AnimateOpacity';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/fundraising-banner.jpeg'
                alt='Mother enjoying a hike through the forest with young girl.'
                title={
                    <>
                        <h1 className='homeOverlayText'>Fundraising</h1>
                        <h1 className='homeOverlayText'>Opportunities</h1>
                    </>
                }
                strength={300}
            />

            <article className="page-content">
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h5 className={styles.firstHeader}>
                            <strong>Why do we fundraise?</strong>
                        </h5>
                        <Image
                            src='/images/jogathon.jpeg'
                            width='790'
                            height='436'
                            alt='Students celebrating a successful jogathon fundraiser with a baloon arch.'
                        />
                        <p style={{ textAlign: 'left' }}>
                            Kardia Classical is a private Christian school and relies on the financial support of parents, grandparents, and friends to keep our school in operation and make a difference for our students. Gifts of all sizes help us accomplish our mission of providing a distinctly classical and Christian education to our community. We are a not-for-profit, 501(c)3 organization, meaning your donation is tax-deductible. Tuition revenue alone does not provide 100% of the school’s operating budget. Kardia relies upon the annual giving funds, capital gifts, and other non-tuition revenue to enhance the school’s resources and help ensure that our students have exceptional opportunities in academics and the arts. Annual giving helps keep tuition affordable, allowing the school to be financially accessible to all families who desire a Christ-centered, classical education for their children. There are three main fundraising events every year and each one takes a large group of volunteers. We’d love your help, whether sponsoring an event, helping with set up, procuring, or any other ways that you can participate!
                        </p>

                    </section>
                </AnimateOpacity>
                {/* <section className={styles.section}>
                    <Image
                        src='/images/jogathon.jpeg'
                        width='790'
                        height='436'
                        alt='Students celebrating a successful jogathon fundraiser with a baloon arch.'
                    />
                </section> */}
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h5 id='what-is-cc-subtitle'>
                            <strong>Jog-A-Thon</strong>
                        </h5>
                        <p style={{ textAlign: 'left' }}>
                            Our students kick off the year, raise donations, and jog laps! Teachers and parents are welcome to join in and jog with students. We will have a jog-a-thon t-shirt available to be ordered and worn on the big day. Corporate sponsors are welcome to be a part of the fun. We’ll add their logo to the back of the t-shirts as a benefit of their sponsorship. Information will go home in late summer and at parent orientation.
                        </p>
                        <Button variant='contained'>
                            <a
                                href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fkardiaclassical.us17.list-manage.com%2Ftrack%2Fclick%3Fu%3D980df44bcdbf41a0edc7951a0%26id%3D77902cdde9%26e%3De40b4ac233&data=05%7C01%7C%7C27d8db8cab514cfdb21608dbbbbf9540%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638310203759978940%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&sdata=9tvOtc7LxFIZFQwhUdDfP8Ymiae%2FDWJhQJm6zRHqVBM%3D&reserved=0"
                                target='_blank'
                                className='jogathonLink'
                                style={{ color: 'white' }}
                            >
                                <div>
                                    JOG-A-THON PLEDGES
                                </div>
                            </a>
                        </Button>

                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h5 id='what-is-cc-subtitle'>
                            <strong>Giving Tuesday</strong>
                        </h5>
                        <p style={{ textAlign: 'left' }}>
                            First started in 2012, Giving Tuesday is a nationally special day each year meant to unofficially “open the giving season.” Giving Tuesday is always on the first Tuesday after Black Friday and Cyber Monday.
                        </p>
                    </section>
                </AnimateOpacity>
                <AnimateOpacity>
                    <section className={styles.section}>
                        <h5 id='what-is-cc-subtitle'>
                            <strong>Annual Auction</strong>
                        </h5>
                        <p>The Annual Auction is an evening to celebrate what God has done in, through, and for our school, as well as an opportunity to raise money to continue our mission as a school. The Gala typically involves a silent and live auction and is a lot of fun!</p>
                        <p>This event is the largest fundraiser of the year to support the school. Proceeds from our gala are allocated towards operations and growing our school. Each family is expected to provide or procure item(s) valued at $100 or more for the auction. We offer procurement packets and training. You can get very creative with procurement! Family experiences tend to have the best results.</p>
                        <p>Auction procurement packets will be sent out several months before the event and the information in the packet is intended to assist and inspire you. The packet is loaded with great information to make the procurement process easier for you.</p>
                    </section>
                </AnimateOpacity>
            </article>

        </main>
    )
}

export default page