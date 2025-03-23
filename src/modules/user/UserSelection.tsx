'use client';
import { Attendee, attendees } from '@/data/attendees';
import styles from './UserSlection.module.css';
import React, { ComponentProps } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import { NO_USER, useUser, useUserEdit } from '@/contexts/user.context';
import { SelectedUser } from '@/modules/user/SelectedUser';

const sortedAttendees = attendees.sort((a, b) => a.name.localeCompare(b.name));

export const UserSelection = () => {
  const user = useUser();
  const { setUser, removeUser } = useUserEdit();

  const handleSelection: ComponentProps<'select'>['onChange'] = (e) => {
    const userId = parseInt(e.target.value);
    const user = attendees.find((it) => it.id === userId);
    setUser(user as Attendee);
  };

  return (
    <Flipper flipKey={user} className={styles.container}>
      {user !== NO_USER ? (
        <Flipped flipId="selectedUser">
          <SelectedUser onClick={removeUser}>{user.name}</SelectedUser>
        </Flipped>
      ) : (
        <Flipped flipId="selectedUser">
          <select className={styles.select} defaultValue={-1} onChange={handleSelection}>
            <option value={-1} disabled style={{ fontStyle: 'italic' }}>
              Choisissez votre nom
            </option>
            {sortedAttendees.map((attendee) => (
              <option key={attendee.id} value={attendee.id}>
                {attendee.name}
              </option>
            ))}
          </select>
        </Flipped>
      )}
    </Flipper>
  );
};
