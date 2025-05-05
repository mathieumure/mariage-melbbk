import { Attendee, attendees } from '@/data/attendees';
import { challengesByTeam } from '@/data/defi-photo';
import styles from './checks.module.css';

const attendeesByRoom = attendees.reduce(
  (acc, attendee) => {
    const room = attendee.room;
    if (!room) {
      return acc;
    }
    if (!acc[room]) {
      acc[room] = [];
    }
    acc[room].push(attendee);
    return acc;
  },
  {} as Record<string, Array<Attendee>>,
);

const attendeesByChallenge = attendees.reduce(
  (acc, attendee) => {
    const defiPhoto = attendee.defi_photo;
    if (!defiPhoto) {
      return acc;
    }
    if (!acc[defiPhoto]) {
      acc[defiPhoto] = [];
    }
    acc[defiPhoto].push(attendee);
    return acc;
  },
  {} as Record<string, Array<Attendee>>,
);

export default async function Checks() {
  return (
    <section className={styles.container}>
      <h2>Répartition des chambres</h2>
      <table className={styles.table}>
        <tbody>
          {Object.entries(attendeesByRoom)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(([room, attendees]) => {
              return (
                <tr key={room}>
                  <td>{room}</td>
                  {attendees.map((it) => (
                    <td key={it.name}>{it.name}</td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>

      <p>Invités sans chambre</p>
      <ul>
        {attendees
          .filter((it) => !it.room)
          .map((it) => (
            <li key={it.name}>{it.name}</li>
          ))}
      </ul>
      <h2>Répartition des jeux</h2>
      <table className={styles.table}>
        <tbody>
          {Object.entries(attendeesByChallenge).map(([team, attendees]) => {
            return (
              <tr key={team}>
                <td>{challengesByTeam[team]}</td>
                {attendees.map((it) => (
                  <td key={it.name}>
                    {it.name}
                    {it.name === it.defi_photo && <i>(C)</i>}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>Invités sans équipe</p>
      <ul>
        {attendees
          .filter((it) => !it.defi_photo)
          .map((it) => (
            <li key={it.name}>{it.name}</li>
          ))}
      </ul>
    </section>
  );
}
