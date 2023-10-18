import { Tooltip } from 'antd'
import styles from './Tooltip.module.scss'

const Tooltips = ({ title, id, color, url, icon }) => {
    return (
        <Tooltip title={title} key={id} color={color}>
            <a className={styles.link} href={url}>{icon}</a>
        </Tooltip>
    )
}

export default Tooltips