import styles from './plan.module.css';
import Image from 'next/image';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

export default function Photo() {
  return (
    <article className={styles.container}>
      <SelectedUserOnPage />
      <h1 className={styles.title}>Plan</h1>
      <Image src="/plan-du-site.png" alt="Plan des chambres" width={800} height={600} className={styles.image} />
    </article>
  );
}
