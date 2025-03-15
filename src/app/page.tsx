import React from 'react';
import styles from './home.module.css';
import { Birds } from '@/modules/icons/Birds';
import { UserSelection } from '@/modules/user/UserSelection';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();

  return (
    <div className={styles.container}>
      <Birds className={styles.logo} />
      <h1 className={styles.title}>Mélanie & Arnaud</h1>
      <h2 className={styles.subtitle} aria-label="24 mai 2025">
        24 // 05 // 25
      </h2>
      <div className={styles.actionsBar}>
        <UserSelection initialUser={cookieStore.get('user')?.value ?? null} />
        <ul>
          <li>
            <button aria-label="Défis photos">Coucou</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
