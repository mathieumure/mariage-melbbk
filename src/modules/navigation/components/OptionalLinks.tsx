'use client';
import Link from 'next/link';
import styles from './NavLinks.module.css';
import { Camera } from '@/modules/icons/Camera';
import { QuiEstCe } from '@/modules/icons/QuiEstCe';
import React from 'react';
import { NO_USER, useUser } from '@/contexts/user.context';

type Props = {
  defiPhotoFlag: boolean;
  quiestCeFlag: boolean;
};
export const OptionalLinks = ({ defiPhotoFlag, quiestCeFlag }: Props) => {
  const user = useUser();

  if (user === NO_USER) {
    return null;
  }

  return (
    <ul className={styles.optionalLinks}>
      {defiPhotoFlag && (
        <li>
          <Link href="/defi-photo" className={styles.link}>
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
