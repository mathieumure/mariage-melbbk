'use client';
import styles from './plan.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';
import { Map } from '@/modules/icons/Maps';
// import {useUser} from "@/contexts/user.context";

export default function Photo() {
  // const user = useUser();

  return (
    <article className={styles.container}>
      <SelectedUserOnPage />
      <h1 className={styles.title}>Plan</h1>
      <p></p>
      <Map active="E" />

      {/*<Image src="/plan-du-site.png" alt="Plan des chambres" width={800} height={600} className={styles.image} />*/}
    </article>
  );
}
