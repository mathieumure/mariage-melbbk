'use client';

import { useUser } from '@/contexts/user.context';
import styles from './defi-photo.module.css';
import { attendees } from '@/data/attendees';
import { UploadArea } from '@/app/defi-photo/Upload';
import { challengesByTeam } from '@/data/defi-photo';

type Props = {
  photos: Array<string>;
};
export function DefiPhoto({ photos }: Props) {
  const user = useUser();
  const otherInTeam = attendees.filter((it) => it.defi_photo === user.defi_photo && it.name !== user.name).map((it) => it.name);
  const challenge = challengesByTeam[user.defi_photo];
  const filename = `Defi_${user.defi_photo}_${challenge}`;
  const initialFile = photos.find((it) => it.includes(filename));

  if (!challenge) {
    return (
      <section className={styles.intro}>
        <p>Pas de défi photo à faire pour toi {user.name} 🥺</p>
      </section>
    );
  }

  return (
    <section className={styles.intro}>
      <p>{user.name}, tu es dans la même équipe que.</p>
      <ul className={styles.team}>
        {otherInTeam.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <p>
        Ton chef d&apos;équipe est <b className={styles.strong}>{user.defi_photo}</b>
      </p>
      <p>
        Vous êtes mis au défi de prendre une photo <strong className={styles.strong}>{challenge}</strong>
      </p>
      <UploadArea filename={filename} allowReplace initialFile={initialFile} />
    </section>
  );
}
