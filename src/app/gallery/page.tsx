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
      {/*{fullScreenPhotoId !== -1 ? (*/}
      {/*  <section className={styles.fullDisplay} onClick={hideFullScreen}>*/}
      {/*    <button className={styles.fullDisplayLeftControlButton} onClick={previousPhoto}>*/}
      {/*      <ArrowLeft />*/}
      {/*    </button>*/}
      {/*    <img className={styles.fullDisplayImage} src={`${photos[fullScreenPhotoId]}`} />*/}
      {/*    <button className={styles.fullDisplayRightControlButton} onClick={nextPhoto}>*/}
      {/*      <ArrowLeft className={styles.arrowRight} />*/}
      {/*    </button>*/}
      {/*  </section>*/}
      {/*) : null}*/}
    </article>
  );

  // const [photos, setPhotos] = useState<Array<string>>(Array(100).fill(''));
  // const [fullScreenPhotoId, setFullScreenPhotoId] = useState<number>(-1);
  //
  // useEffect(() => {
  //   axios.get('/api/photos')
  //     .then((response) => {
  //       setPhotos(response.data);
  //     });
  // }, []);
  //
  // function hideFullScreen() {
  //   setFullScreenPhotoId(-1);
  // }
  //
  // function nextPhoto(e: SyntheticEvent) {
  //   e.stopPropagation();
  //   setFullScreenPhotoId((fullScreenPhotoId + 1) % photos.length);
  // }
  // function previousPhoto(e: SyntheticEvent) {
  //   e.stopPropagation();
  //   setFullScreenPhotoId((fullScreenPhotoId - 1) % photos.length);
  // }
  //
  // return (
  //   <article className={styles.container}>
  //     <BackLink />
  //     <SelectedUserOnPage />
  //     <h1 className={styles.title}>Galerie photo</h1>
  //     <ul className={styles.gallery}>
  //       {photos.map((photo, index) => (
  //         <li key={index}>
  //           {photo !== '' ? (
  //             <button onClick={() => setFullScreenPhotoId(index)}>
  //               <img src={`${photo}?size=small`} className={styles.photo} loading="lazy" />
  //             </button>
  //           ) : null}
  //         </li>
  //       ))}
  //     </ul>
  //     {fullScreenPhotoId !== -1 ? (
  //       <section className={styles.fullDisplay} onClick={hideFullScreen}>
  //         <button className={styles.fullDisplayLeftControlButton} onClick={previousPhoto}>
  //           <ArrowLeft />
  //         </button>
  //         <img className={styles.fullDisplayImage} src={`${photos[fullScreenPhotoId]}`} />
  //         <button className={styles.fullDisplayRightControlButton} onClick={nextPhoto}>
  //           <ArrowLeft className={styles.arrowRight} />
  //         </button>
  //       </section>
  //     ) : null}
  //   </article>
  // );
}
