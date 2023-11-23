import Image from 'next/image'
import styles from './page.module.scss'
import { Roboto, Inter } from 'next/font/google'
import Banner from '@/components/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
})

export default function Home() {
    return (
        <main className={styles.main}>
            <Banner
                img='/banners/home-banner.jpg'
                alt='Lightbulbs over a bookshelf in a library'
                title={
                    <>
                        <h1 className='overlay-text'>Classical</h1>
                        <h1 className='overlay-text'>Christian</h1>
                        <h1 className='overlay-text'>Parent Partnership</h1>
                    </>
                }
                strength='400'
            />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel aspernatur obcaecati, ipsam hic aliquid impedit sequi iusto quam consequuntur ducimus perferendis excepturi? Cupiditate dicta error molestiae culpa! Esse animi, obcaecati dolorum possimus voluptatum vero expedita provident repellendus at voluptate accusamus quasi excepturi voluptatem maiores reprehenderit culpa ratione dicta, quas iusto. Est reprehenderit veniam sint asperiores rem voluptate amet dolores? Hic et asperiores beatae ab quos ipsum quaerat numquam qui, aliquid eaque non inventore fugit obcaecati labore magnam commodi, sapiente, porro temporibus? Reiciendis illum dicta officia perspiciatis consequatur consequuntur ducimus neque nemo saepe voluptate, ea voluptas expedita? Maxime, aspernatur nam!
            </p>
        </main>
    )
}
