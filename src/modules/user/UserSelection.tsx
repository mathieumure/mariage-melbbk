'use client';
import { attendees } from '@/data/attendees';
import styles from './UserSlection.module.css';
import React, { ComponentProps } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { setCookie } from '@/modules/storage/cookies';
import { useUser } from '@/contexts/user.context';
import { SelectedUser } from '@/modules/user/SelectedUser';

const sortedAttendees = attendees.sort((a, b) => a.name.localeCompare(b.name));

export const UserSelection = () => {
  const { user, setUser } = useUser();

  const handleSelection: ComponentProps<'select'>['onChange'] = (e) => {
    setUser(e.target.value);
    setCookie('user', e.target.value);
  };

  return (
    <Flipper flipKey={user} className={styles.container}>
      {user ? (
        <Flipped flipId="selectedUser">
          <SelectedUser onClick={() => setUser(null)}>{user}</SelectedUser>
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
