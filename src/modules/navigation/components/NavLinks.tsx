'use client';
import styles from './NavLinks.module.css';
import Link from 'next/link';
import { Camera } from '@/modules/icons/Camera';
import { Map } from '@/modules/icons/Map';
import { QuiEstCe } from '@/modules/icons/QuiEstCe';
import React from 'react';
import { NO_USER, useUser } from '@/contexts/user.context';

export const NavLinks = () => {
  const user = useUser();

  if (user === NO_USER) {
    return null;
  }

  return (
    <ul className={styles.links}>
      <li>
        <Link href="/photos" className={styles.link}>
          <Camera className={styles.linkIcon} />
          Défis photos
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
        <Link href="/quiestce" className={styles.link}>
          <QuiEstCe className={styles.linkIcon} />
          Qui est-ce
        </Link>
      </li>
    </ul>
  );
};
