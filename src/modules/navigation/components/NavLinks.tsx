'use client';
import styles from './NavLinks.module.css';
import Link from 'next/link';
import { Camera } from '@/modules/icons/Camera';
import { Map } from '@/modules/icons/Map';
import { QuiEstCe } from '@/modules/icons/QuiEstCe';
import React from 'react';
import { NO_USER, useUser } from '@/contexts/user.context';
import { Info } from '@/modules/icons/Info';
import { Gallery } from '@/modules/icons/Gallery';

type Props = {
  defiPhotoFlag: boolean;
  quiestCeFlag: boolean;
};

export const NavLinks = ({ defiPhotoFlag, quiestCeFlag }: Props) => {
  const user = useUser();

  if (user === NO_USER) {
    return null;
  }

  return (
    <ul className={styles.links}>
      <li>
        <Link href="/info" className={styles.link}>
          <Info className={styles.linkIcon} />
          Information
        </Link>
      </li>
      <li>
        <Link href="/plan" className={styles.link}>
          <Map className={styles.linkIcon} />
          Plan des
          <br />
          chambres
        </Link>
      </li>
      <li>
        <Link href="/gallery" className={styles.link}>
          <Gallery className={styles.linkIcon} />
          Gallerie photos
        </Link>
      </li>
      {defiPhotoFlag && (
        <li>
          <Link href="/photos" className={styles.link}>
            <Camera className={styles.linkIcon} />
            Défis photos
          </Link>
        </li>
      )}
      {quiestCeFlag && (
        <li>
          <Link href="/quiestce" className={styles.link}>
            <QuiEstCe className={styles.linkIcon} />
            Qui est-ce
          </Link>
        </li>
      )}
    </ul>
  );
};
