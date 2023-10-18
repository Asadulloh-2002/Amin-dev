import { useState } from 'react'
import { motion } from 'framer-motion'
import Links from './Links/Links'
import styles from './Sidebar.module.scss'
import ToggleButton from './ToggleButton/ToggleButton'

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: 'spring',
                stiffness: 40
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 50
            },
        },
    }
    return (
        <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
            <motion.div className={styles.content} variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar