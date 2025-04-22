import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { BackLink } from '@/modules/navigation/components/BackLink';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

import styles from './defi-photo.module.css';
import { DefiPhoto } from './DefiPhoto';
import { synologyClient } from '@/modules/synology/synology.api';

export default async function Gallery() {
  const cookiesStore = await cookies();
  const sid = cookiesStore.get('sid');
  const user = cookiesStore.get('user');

  // TODO uncomment for go live
  // if (process.env.FLAG_DEFI_PHOTO !== 'true') {
  //   redirect('/');
  // }

  if (!sid || !user) {
    redirect('/');
  }

  const photos = await synologyClient.getPhotoList(sid?.value, ['Defi_*.png', 'Defi_*.jpg', 'Defi_*.jpeg']);
  const photosPath = photos.data.files.map((file) => `/api/photo/${file.name}`);

  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Défi photo</h1>
      <DefiPhoto photos={photosPath} />
    </article>
  );
}
