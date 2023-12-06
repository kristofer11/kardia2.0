"use client"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateOpacity = ({ children, duration = 1 }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: duration }}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}

export default AnimateOpacity