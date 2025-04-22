'use client';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useEffect } from 'react';

type Props = {
  galleryID: string;
};
export const GalleryLightbox = (props: Props) => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [props.galleryID]);

  return null;
};
