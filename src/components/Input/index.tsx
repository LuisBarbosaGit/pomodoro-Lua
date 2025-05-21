import styles from './Styles.module.css';

type InputProps = {
  id: string;
  labelText?: string;
  labelProps?: React.ComponentProps<'label'>; //Rcebendo todas as propriedades possíveis do label
} & React.ComponentProps<'input'>; //Utilizando os Props do componente Input jsx do React

export function Input({
  labelText,
  labelProps,
  id,
  type,
  ...rest
}: InputProps) {
  return (
    <>
      {labelText && (
        <label {...labelProps} htmlFor={id}>
          {labelText}
        </label>
      )}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
}
