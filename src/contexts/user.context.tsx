'use client';
import React, { useContext, useMemo } from 'react';
import { Attendee } from '@/data/attendees';
import { deleteCookie, setCookie } from '@/modules/storage/cookies';

export const NO_USER: Attendee = {
  id: -1,
  room: 'B0',
  name: 'Unknown',
  defi_photo: 'Unknown',
};

const UserContext = React.createContext<Attendee>(NO_USER);
type UserEditContextType = {
  setUser: (user: Attendee) => void;
  removeUser: () => void;
};
const UserEditContext = React.createContext<UserEditContextType>({
  setUser: () => {},
  removeUser: () => {},
});

type Props = {
  initialUser?: Attendee;
};
export const UserProvider = ({ initialUser = NO_USER, children }: React.PropsWithChildren<Props>) => {
  const [user, setUser] = React.useState(initialUser);
  const editUserContext = useMemo<UserEditContextType>(
    () => ({
      setUser: (user) => {
        setCookie('user', user.id.toString());
        setUser(user);
      },
      removeUser: () => {
        setUser(NO_USER);
        deleteCookie('user');
      },
    }),
    [setUser],
  );
  return (
    <UserEditContext.Provider value={editUserContext}>
      <UserContext.Provider value={user}>{children}</UserContext.Provider>
    </UserEditContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
export const useUserEdit = () => useContext(UserEditContext);
