import styles from './quiestce.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

export default function Photo() {
  return (
    <article className={styles.container}>
      <SelectedUserOnPage />
      <h1 className={styles.title}>Qui est-ce ?</h1>
    </article>
  );
}
