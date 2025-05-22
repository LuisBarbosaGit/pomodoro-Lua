import styles from './Style.module.css';

type DefaultButtonProps = {
  icon: React.ReactNode;
  color: 'green' | 'red';
};

export function DefaultButton({ icon, color }: DefaultButtonProps) {
  return (
    <div>
      <button className={`${styles.button} ${styles[color]} `}>{icon}</button>
    </div>
  );
}
