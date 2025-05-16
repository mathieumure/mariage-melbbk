import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BackLink } from '@/modules/navigation/components/BackLink';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

import styles from './Upload.module.css';
import { UploadArea } from './Upload';

export default async function Gallery() {
  const cookiesStore = await cookies();
  const sid = cookiesStore.get('sid');
  const user = cookiesStore.get('user');

  // TODO uncomment for go live
  // if (process.env.UPLOAD !== 'true') {
  //   redirect('/');
  // }

  if (!sid || !user) {
    redirect('/');
  }

  return (
    <article className={styles.container}>
      <BackLink target="/gallery" />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Partagez vos photo</h1>
      <div className={styles.content}>
        <UploadArea />
      </div>
    </article>
  );
}
