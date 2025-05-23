import styles from './Styles.module.css';
import { Cyrcle } from '../Cyrcle';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Input } from '../Input';


export function FormHome() {
  return (
    <form action='' className={styles.form}>
      <div className={styles.formRow}>
        <Input
              labelText='Task'
              labelProps={{ style: { fontSize: '2.5rem' } }}
              id='defaultInput'
              type='text'
              placeholder='Digite sua task'
            /></div>
      <div className={styles.formRow}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cyrcle />
      <DefaultButton icon={<PlayCircleIcon />} color='green' />
    </form>
  );
}
