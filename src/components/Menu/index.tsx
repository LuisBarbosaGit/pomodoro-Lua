import { HomeIcon, ListRestartIcon, MoonStar, RotateCcwIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from  './Styles.module.css'


export function Menu() {
    return(
        <div className={styles.menu}>
            <a href="" className={styles.menuLink}>
                <HomeIcon />
            </a>
            <a href="" className={styles.menuLink}>
                <RotateCcwIcon />
            </a>
            <a href="" className={styles.menuLink}>
                <SettingsIcon />
            </a>
            <a href="" className={styles.menuLink}>
                <SunIcon />
            </a>
        </div>
    )
    
}