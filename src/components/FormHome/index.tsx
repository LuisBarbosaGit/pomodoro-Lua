import styles from './Styles.module.css';
import { Cyrcle } from '../Cyrcle';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

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
      <Cyrcle />
      <DefaultButton icon={<PlayCircleIcon />} color='green' />
    </form>
  );
}
