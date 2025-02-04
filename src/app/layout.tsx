import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import {
  FlowerBottomLeft,
  FlowerBottomMiddle,
  FlowerBottomMiddleLeft,
  FlowerBottomMiddleRight,
  FlowerBottomRight,
  FlowerTopLeft,
  FlowerTopMiddle,
  FlowerTopMiddleRight,
  FlowerTopRight,
} from '@/modules/icons/Flowers';
import { Heart } from '@/modules/icons/Heart';

import './reset.css';
import './globals.css';
import styles from './layout.module.css';

const nuevaStd = localFont({
  display: 'swap',
  src: [
    {
      path: '../font/NuevaStd-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/NuevaStd-BoldCond.otf',
      weight: '800',
      style: 'bold',
    },
  ],
});

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={nuevaStd.className}>
      <body>
        <div className={styles.top}>
          <FlowerTopLeft className={styles.flowerTopLeft} />
          <Heart className={styles.heart} />
          <FlowerTopMiddle className={styles.flowerTopMiddle} />
          <FlowerTopMiddleRight className={styles.flowerTopMiddleRight} />
          <FlowerTopRight className={styles.flowerTopRight} />
        </div>
        <main className={styles.main}>{children}</main>
        <div className={styles.bottom}>
          <FlowerBottomLeft className={styles.flowerBottomLeft} />
          <FlowerBottomMiddleLeft className={styles.flowerBottomMiddleLeft} />
          <FlowerBottomMiddle className={styles.flowerBottomMiddle} />
          <FlowerBottomMiddleRight className={styles.flowerBottomMiddleRight} />
          <FlowerBottomRight className={styles.flowerBottomRight} />
        </div>
      </body>
    </html>
  );
}
