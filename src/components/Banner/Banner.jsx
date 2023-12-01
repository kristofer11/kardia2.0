"use client"
import { Parallax } from "react-parallax";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './banner.scss'

const Banner = ({ img, alt, title, strength }) => {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : {}}
            transition={{duration: 1}}
            ref={ref1}
        >
            <Parallax
                bgImage={img}
                strength={strength}
                bgImageAlt={alt}
            >
                <div className="banner">
                    <div className="banner-text">
                        {title}
                    </div>
                </div>
            </Parallax>
        </motion.div>
    )
}

export default Banner