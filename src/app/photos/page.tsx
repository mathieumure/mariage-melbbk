import styles from './photos.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

export default function Photo() {
  return (
    <article className={styles.container}>
      <SelectedUserOnPage />
      <h1 className={styles.title}>Défis photos</h1>
      <div className="actionContainer">
        <button>+</button>
      </div>
    </article>
  );
}
