import StaffList from '../../features/StaffList';
import styles from './page.module.scss';
import Banner from '../../components/Banner/Banner'

const page = () => {
    return (
        <div className={styles.staffPage}>
            <Banner
                img='/banners/staff-banner.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='homeOverlayText' > Faculty</h1>
                        <h1 className='homeOverlayText'> Staff</h1>
                        <h1 className='homeOverlayText'> and School Board</h1>
                    </>
                }
                strength='333'
            />
            <section className={`page-content ${styles.staffContent}`}>
                <StaffList />

            </section>
        </div>
    )
}

export default page