import { MoonStar } from 'lucide-react'
import styles from  './Styles.module.css'


export function Menu() {
    return(
        <div className={styles.menu}>
            <a href="" className={styles.menuLink}>
                <MoonStar />
            </a>
            <a href="" className={styles.menuLink}>
                <MoonStar />
            </a>
            <a href="" className={styles.menuLink}>
                <MoonStar />
            </a>
            <a href="" className={styles.menuLink}>
                <MoonStar />
            </a>
        </div>
    )
    
}