'use client';
import { attendees } from '@/data/attendees';
import styles from './UserSlection.module.css';
import { ComponentProps, useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { setCookie } from '@/modules/storage/cookies';

const sortedAttendees = attendees.sort((a, b) => a.name.localeCompare(b.name));

type Props = { initialUser: string | null };
export const UserSelection = ({ initialUser }: Props) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(initialUser);

  const handleSelection: ComponentProps<'select'>['onChange'] = (e) => {
    setSelectedUser(e.target.value);
    setCookie('user', e.target.value);
  };

  return (
    <Flipper flipKey={selectedUser}>
      {selectedUser ? (
        <Flipped flipId="selectedUser">
          <button className={styles.selectedUser} onClick={() => setSelectedUser(null)}>
            {selectedUser}
          </button>
        </Flipped>
      ) : (
        <Flipped flipId="selectedUser">
          <select className={styles.select} defaultValue={-1} onChange={handleSelection}>
            <option value={-1} disabled style={{ fontStyle: 'italic' }}>
              Choisissez votre nom
            </option>
            {sortedAttendees.map((attendee) => (
              <option key={attendee.name}>{attendee.name}</option>
            ))}
          </select>
        </Flipped>
      )}
    </Flipper>
  );
};
