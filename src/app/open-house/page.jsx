import Banner from '@/components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Button from '@mui/material/Button';

const page = () => {
    return (
        <main className={`${styles.main} page-main`}>
            <Banner
                img='/banners/classroom.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Open House</h1>
                        <h1 className='overlay-text' style={{ fontSize: '3rem', marginLeft: '4rem' }}><em>January 31, 2025</em></h1>
                    </>
                }
                strength='400'
            />
            <div className={styles.imgDiv}>
                <Button
                    href='https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.signupgenius.com%2Fgo%2F10C0B4AA8AD2EA3FBC43-54151897-january&data=05%7C02%7C%7C831523a97f18442baf7008dd26d060ea%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C638709398649610833%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=V6%2FmqQzjWrCFp35islHmtfem1vzdD9rRX5QxZI3Xrys%3D&reserved=0'
                    variant='contained' 
                    target='_blank'
                >
                   Click here to RSVP
                </Button>
                
                <Image
                    src='/images/open_house.png'
                    width='900'
                    height='900'
                    alt='information about the 2024 annual auction supporting Kardia Classical School'
                    className={styles.auctionImg}
                />

                {/* <h3>Open from Thursday March 21 at 7pm to Sunday March 24th at 7pm</h3> */}
            </div>

        </main>
    )
}

export default page