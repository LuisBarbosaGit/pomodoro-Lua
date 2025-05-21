import styles from './Styles.module.css';
import { Cyrcle } from '../Cyrcle';

type FormHomeProps = {
  children: React.ReactNode;
};

export function FormHome({ children }: FormHomeProps) {
  return (
    <form action='' className={styles.form}>
      <div className={styles.formRow}>{children}</div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cyrcle/>
      <div className={styles.formRow}>
        <button className={styles.enviar}>Enviar</button>
      </div>
    </form>
  );
}
