/* eslint-disable @next/next/no-img-element */
import { Button } from '../Button';
import styles from './styles.module.scss';

export function Form() {
  return (
    <div className={styles.container} id="contacts">
      <img src="/images/bg-lets-work.png" alt="bg" />
      <div className={styles.form}>
        <h4>Let’s Work Together</h4>
        <p>
          My line is always open to receive and answer any queries and follow
          ups
        </p>
        <Button title="Let's chat" />
      </div>
      <div className={styles.formPhoto}>
        <img src="/images/lets-work-togheter.png" alt="Lets Work Togheter" />
      </div>
    </div>
  );
}
