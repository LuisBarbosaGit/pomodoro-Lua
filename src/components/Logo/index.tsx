import { MoonStar } from 'lucide-react'
import styles from  './Styles.module.css'


export function Logo() {
    return(
        <div className={styles.logo}>
            <a href="" className={styles.logoLink}>
                <MoonStar />
                Pomodoro Lua
            </a>
        </div>
    )
    
}