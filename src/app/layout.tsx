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
import { UserProvider } from '@/contexts/user.context';
import { cookies } from 'next/headers';
import { Attendee, attendees } from '@/data/attendees';

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const storedUserId = cookieStore.get('user')?.value ?? null;
  let storedUser: Attendee | undefined;
  if (storedUserId) {
    storedUser = attendees.find((it) => it.id === parseInt(storedUserId));
  }

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
        <main className={styles.main}>
          <UserProvider initialUser={storedUser}>{children}</UserProvider>
        </main>
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
