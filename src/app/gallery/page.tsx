import styles from './gallery.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';
import { BackLink } from '@/modules/navigation/components/BackLink';

export default function Gallery() {
  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Gallerie</h1>
    </article>
  );
}
