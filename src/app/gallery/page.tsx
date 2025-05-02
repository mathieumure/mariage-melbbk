import { cookies } from 'next/headers';
import { synologyClient } from '@/modules/synology/synology.api';
import { redirect } from 'next/navigation';
import { BackLink } from '@/modules/navigation/components/BackLink';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';

import styles from './gallery.module.css';
import { GalleryLightbox } from '@/app/gallery/gallery';

export default async function Gallery() {
  const cookiesStore = await cookies();
  const sid = cookiesStore.get('sid');

  if (!sid) {
    redirect('/');
  }

  const photos = await synologyClient.getPhotoList(sid?.value);
  const photosPath = photos.data.files.map((file) => `/api/photo/${file.name}`);

  if (photosPath.length === 0) {
    return (
      <article className={styles.container}>
        <BackLink />
        <SelectedUserOnPage />
        <h1 className={styles.title}>Galerie photo</h1>
        <p className={styles.noPhoto}>Aucune photo disponible</p>
      </article>
    );
  }

  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <GalleryLightbox galleryID="gallery" />
      <h1 className={styles.title}>Galerie photo</h1>
      <ul className={styles.gallery} id="gallery">
        {photosPath.map((photo, index) => (
          <li key={index}>
            <a href={photo}>
              <img src={`${photo}?size=small`} className={styles.photo} loading="lazy" />
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
