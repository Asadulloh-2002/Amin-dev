import { Tooltip } from 'antd'
import styles from './Tooltip.module.scss'
import { motion } from 'framer-motion'

const Tooltips = ({ title, id, color, url, icon, variants, custom }) => {
    return (
        <Tooltip title={title} key={id} color={color}>
            <motion.a variants={variants} custom={custom} className={styles.link} href={url}>{icon}</motion.a>
        </Tooltip>
    )
}

export default Tooltips