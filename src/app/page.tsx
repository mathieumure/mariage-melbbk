import React from 'react';
import styles from './home.module.css';
import { Birds } from '@/modules/icons/Birds';
import { UserSelection } from '@/modules/user/UserSelection';
import { NavLinks } from '@/modules/navigation/components/NavLinks';
import { OptionalLinks } from '@/modules/navigation/components/OptionalLinks';

export default async function Home() {
  const defiPhotoFlag = process.env.FLAG_DEFI_PHOTO === 'true';
  const quiestCeFlag = process.env.FLAG_QUI_EST_CE === 'true';
  return (
    <div className={styles.container}>
      <Birds className={styles.logo} />
      <h1 className={styles.title}>Mélanie & Arnaud</h1>
      <h2 className={styles.subtitle} aria-label="24 mai 2025">
        24 // 05 // 25
      </h2>
      <div className={styles.actionsBar}>
        <UserSelection />
      </div>
      <div className={styles.bottomBar}>
        <NavLinks />
      </div>
      <div className={styles.optionalBar}>
        <OptionalLinks defiPhotoFlag={defiPhotoFlag} quiestCeFlag={quiestCeFlag} />
      </div>
    </div>
  );
}
