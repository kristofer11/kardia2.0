"use client"
import Banner from '../../../components/Banner/Banner';
import styles from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';
import AnimateOpacity from '@/components/animations/AnimateOpacity';
import Confetti from 'react-confetti';

const page = () => {
    return (
        <main className={`page-main ${styles.contactMain}`}>
            <Confetti />
            <AnimateOpacity>
                <section className={`page-content ${styles.contactContent}`} style={{ maxWidth: '98vw', marginTop: '2rem'}}>
                    <h2 className='text-center' style={{ color: '#152d7d'}}>Thanks for contacting Kardia!</h2>
                    <h4 className='text-center' style={{ color: '#152d7d'}}>We will be in touch soon.</h4>
                    <div className={styles.buttons}>
                        <Button variant='contained' href='/'>Home</Button>
                        <Button variant='contained' href='/enrollment'>Enrollment</Button>
                        <Button variant='contained' href='/programs'>Programs</Button>

                    </div>
                    <Image
                        src='/images/399934790_805008228302355_7000395244144421597_n.jpeg'
                        width='1700'
                        height='1275'
                        alt='Kardia students posing for a group picture while on a field trip to a fish hatchery.'
                        className={styles.hatcheryImg}
                    />
                </section>
            </AnimateOpacity>
        </main>
    )
}

export default page