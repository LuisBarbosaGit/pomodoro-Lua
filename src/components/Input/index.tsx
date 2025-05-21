import styles from './Styles.module.css';

type InputProps = {
  id: string;
} & React.ComponentProps<'input'>;//Utilizando os Props do componente Input jsx do React

export function Input({ id, type }: InputProps) {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input className={styles.input} type={type} id={id} />;
    </>
  );
}
