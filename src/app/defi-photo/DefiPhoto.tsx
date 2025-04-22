'use client';

import { useUser } from '@/contexts/user.context';
import styles from './defi-photo.module.css';
import { attendees } from '@/data/attendees';
import { UploadArea } from '@/app/defi-photo/Upload';

const challenges = [
  'avec 4 membres de la famille de la mariée',
  'en faisant des bisous aux mariés',
  'dans les toilettes',
  'dans le plus petit véhicule',
  'avec les STB',
  'sans toucher le sol',
  'avec les quatres témoins',
  'avec 4 membres de la famille du marié',
  'dans la nature',
  'avec tous les quebecois (ils sont 3 au total)',
  'avec un(e) ponot et un(e) breton(ne)',
  "avec quelqu'un de pas invité",
  'dans un dortoir',
  "avec un animal (si aucun n'est disponible se rabattre sur le frère du marié ou de la mariée )",
  'avec Ella et ses grands parents',
];

type Props = {
  photos: Array<string>;
};
export function DefiPhoto({ photos }: Props) {
  const user = useUser();
  const otherInTeam = attendees.filter((it) => it.defi_photo === user.defi_photo && it.name !== user.name).map((it) => it.name);

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
      <p>Vous êtes mis au défi de prendre une photo...</p>
      <ul className={styles.list}>
        {challenges.map((challenge, index) => {
          const filename = `Defi_${user.defi_photo}_${challenge}`;
          const initialFile = photos.find((it) => it.includes(filename));
          return (
            <li key={index} className={styles.text}>
              <details className={styles.challenge}>
                <summary>
                  {challenge}
                  {initialFile && <span className={styles.challengeCompleted}>✅</span>}
                </summary>
                <UploadArea filename={filename} allowReplace initialFile={initialFile} />
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
