'use client';
import styles from './NavLinks.module.css';
import Link from 'next/link';
import { Map } from '@/modules/icons/Map';
import React from 'react';
import { NO_USER, useUser } from '@/contexts/user.context';
import { Info } from '@/modules/icons/Info';
import { Gallery } from '@/modules/icons/Gallery';

export const NavLinks = () => {
  const user = useUser();

  if (user === NO_USER) {
    return null;
  }

  return (
    <ul className={styles.links}>
      <li>
        <Link href="/plan" className={styles.link}>
          <Map className={styles.linkIcon} />
          Plan des
          <br />
          chambres
        </Link>
      </li>
      <li>
        <Link href="/info" className={styles.link}>
          <Info className={styles.linkIcon} />
          Information
        </Link>
      </li>
      <li>
        <Link href="/gallery" className={styles.link}>
          <Gallery className={styles.linkIcon} />
          Gallerie photos
        </Link>
      </li>
    </ul>
  );
};
