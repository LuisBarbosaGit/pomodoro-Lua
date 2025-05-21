import styles from  './Styles.module.css'

type FormHomeProps = {
    children: React.ReactNode
}

export function FormHome({children}: FormHomeProps) {
    return(
        <form action="" className={styles.form}>
            <div className={styles.formRow}>
                {children}
            </div>
            <div className={styles.formRow}>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.formRow}>
                <p>Ciclos</p>
                <p> 0 0 0 0 0 </p>
            </div>
            <div className={styles.formRow}>
                <button className={styles.enviar}>Enviar</button>
            </div>
        </form>
    )
    
}