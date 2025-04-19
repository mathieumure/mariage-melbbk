'use client';
import styles from './plan.module.css';
import { SelectedUserOnPage } from '@/modules/user/SelectedUserOnPage';
import { Map } from '@/modules/icons/Maps';
import { useUser } from '@/contexts/user.context';
import { attendees, Building } from '@/data/attendees';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { BatBSelection } from '@/modules/plan/BatBSelection';
import { BatCSelection } from '@/modules/plan/BatCSelection';
import { BatESelection } from '@/modules/plan/BatESelection';
import { BackLink } from '@/modules/navigation/components/BackLink';

const BUILDING_IMAGE_HEIGHT: Record<Building, number> = {
  B: 1393,
  C: 926,
  E: 579,
};

export default function Plan() {
  const user = useUser();

  if (!user.room) {
    return (
      <article className={styles.container}>
        <BackLink />
        <SelectedUserOnPage />
        <h1 className={styles.title}>Plan</h1>
        <section className={styles.intro}>
          <p>Bonjour {user.name} ! Voici le plan du lieu où aura lieu le mariage.</p>
        </section>
        <section className={styles.section}>
          <div className={styles.mapView}>
            <Map />
          </div>
        </section>
      </article>
    );
  }

  const building = user.room[0] as Building;
  const roommates = attendees.filter((it) => it.room === user.room && it.id !== user.id).map((it) => it.name);
  const displayRoomates = roommates.slice(0, -1).join(', ') + ' & ' + roommates.slice(-1);

  const buildingImageAttributes: ComponentProps<typeof Image> = {
    src: `/Bat${building.toUpperCase()}.webp`,
    alt: `Plan du batiment ${building.toUpperCase()}`,
    priority: true,
    width: 2048,
    height: BUILDING_IMAGE_HEIGHT[building] || 0,
    style: {
      width: '100%',
      height: 'auto',
    },
  };

  return (
    <article className={styles.container}>
      <BackLink />
      <SelectedUserOnPage />
      <h1 className={styles.title}>Plan</h1>
      <section className={styles.intro}>
        <p>
          Bonjour {user.name} ! Tu loges dans la chambre <b className={styles.strong}>{user.room}</b>.
        </p>
        <p>
          Tu es dans la même chambre que <b className={styles.strongAlt}>{displayRoomates}</b>
        </p>
      </section>
      <section className={styles.section}>
        <p className={styles.text}>
          Ta chambre se trouve dans le bâtiment <b className={styles.strong}>{building}</b>.
        </p>
        <div className={styles.mapView}>
          <Map active={building} />
        </div>
      </section>
      {user.room && (
        <section className={styles.section}>
          <p className={styles.text}>
            Et voici l&apos;emplacement de la chambre <b className={styles.strong}>{user.room}</b> à l&apos;intérieur du batiment <strong>{building}</strong>.
          </p>
          <div className={styles.buildingContainer}>
            {building === 'B' && <BatBSelection room={user.room} className={styles.marker} />}
            {building === 'C' && <BatCSelection room={user.room} className={styles.marker} />}
            {building === 'E' && <BatESelection room={user.room} className={styles.marker} />}
            <Image {...buildingImageAttributes} />
          </div>
        </section>
      )}
    </article>
  );
}
