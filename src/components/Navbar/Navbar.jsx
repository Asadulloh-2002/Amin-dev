import { Facebook, Instagram, Telegram, YouTube } from '../../../public'
import { motion } from 'framer-motion'
import Tooltips from '../Tooltip/Tooltip'
import styles from './Navbar.module.scss'

const Navbar = () => {
    const socials = [
        {
            id: 1,
            title: "Instagram",
            url: 'https://www.instagram.com/asadullohe_',
            icon: <Instagram />,
            color: "#e64771"
        },
        {
            id: 2,
            title: "Facebook",
            url: 'https://www.facebook.com/asadullo.husanboyev',
            icon: <Facebook />,
            color: "#039be5"
        },
        {
            id: 3,
            title: "You-Tube",
            url: 'https://www.youtube.com/@asadullohe',
            icon: <YouTube />,
            color: "#FF3D00"
        },
        {
            id: 4,
            title: "Telegram",
            url: 'https://T.me/asadullohe',
            icon: <Telegram />,
            color: "#29b6f6"
        },
    ]

    const variants = {
        visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
        hidden: { opacity: 0, y: -200 },
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.wrapper}>
                <motion.h2 initial={{ opacity: 0, x: -150 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', duration: 1.5 }}>Amin Dev</motion.h2>
                <motion.div className={styles.social} initial="hidden" animate={open ? 'visible' : 'hidden'} variants={variants}>
                    {!!socials && socials.map((social, i) => (
                        <Tooltips {...social} variants={variants} custom={i} />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar