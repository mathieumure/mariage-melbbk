'use client';
import styles from './gallery.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';
import { BackLink } from '@/modules/navigation/components/BackLink';
import { SyntheticEvent, useEffect, useState } from 'react';
import { ArrowLeft } from '@/modules/icons/ArrowLeft';

export default function Gallery() {
  const [photos, setPhotos] = useState<Array<string>>(Array(100).fill(''));
  const [fullScreenPhotoId, setFullScreenPhotoId] = useState<number>(-1);

  useEffect(() => {
    fetch('/api/photos')
      .then((it) => it.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  function hideFullScreen() {
    setFullScreenPhotoId(-1);
  }

  function nextPhoto(e: SyntheticEvent) {
    e.stopPropagation();
    setFullScreenPhotoId((fullScreenPhotoId + 1) % photos.length);
  }
  function previousPhoto(e: SyntheticEvent) {
    e.stopPropagation();
    setFullScreenPhotoId((fullScreenPhotoId - 1) % photos.length);
  }

  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Gallerie photo</h1>
      <ul className={styles.gallery}>
        {photos.map((photo, index) => (
          <li key={index}>
            {photo !== '' ? (
              <button onClick={() => setFullScreenPhotoId(index)}>
                <img src={`${photo}?size=small`} className={styles.photo} loading="lazy" />
              </button>
            ) : null}
          </li>
        ))}
      </ul>
      {fullScreenPhotoId !== -1 ? (
        <section className={styles.fullDisplay} onClick={hideFullScreen}>
          <button className={styles.fullDisplayLeftControlButton} onClick={previousPhoto}>
            <ArrowLeft />
          </button>
          <img className={styles.fullDisplayImage} src={`${photos[fullScreenPhotoId]}`} />
          <button className={styles.fullDisplayRightControlButton} onClick={nextPhoto}>
            <ArrowLeft className={styles.arrowRight} />
          </button>
        </section>
      ) : null}
    </article>
  );
}
