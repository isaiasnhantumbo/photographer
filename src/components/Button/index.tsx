import styles from './styles.module.scss';

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return <button className={styles.button}>{title}</button>;
}
