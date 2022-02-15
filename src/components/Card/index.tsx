import styles from './styles.module.scss';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  serviceTitle: string;
  serviceDescription: string;
  servicePrice: string;
}

export function Card({
  imgSrc,
  imgAlt,
  servicePrice,
  serviceDescription,
  serviceTitle,
}: CardProps) {
  return (
    <div className={styles.container}>
      <img src={imgSrc} alt={imgAlt} />
      <h3>{serviceTitle}</h3>
      <p>{serviceDescription}</p>
      <div className={styles.price}>
        From $ <span>{servicePrice}</span>
      </div>
    </div>
  );
}
