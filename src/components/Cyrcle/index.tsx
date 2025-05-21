import styles from './Style.module.css'

export function Cyrcle() {
  return (
    <div className={styles.circle}>
      <span className={styles.ciclosTitle}>Ciclos:</span>
      <div className={styles.circleDots}>
        <div className={styles.circleDot}></div>
        <div className={`${styles.circleDot} ${styles.shortInterval}`}></div>
        <div className={styles.circleDot}></div>
        <div className={`${styles.circleDot} ${styles.shortInterval}`}></div>
        <div className={styles.circleDot}></div>
        <div className={`${styles.circleDot} ${styles.shortInterval}`}></div>
        <div className={styles.circleDot}></div>
        <div className={`${styles.circleDot} ${styles.longInterval}`}></div>
      </div>
    </div>
  )
}