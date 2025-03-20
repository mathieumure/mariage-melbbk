'use client';
import React, { useContext, useMemo } from 'react';

type UserContext = {
  user: string | null;
  setUser: (user: string | null) => void;
};

const UserContext = React.createContext<UserContext>({
  user: null,
  setUser: () => {},
});

type Props = {
  initialUser: string | null;
};
export const UserProvider = ({ initialUser, children }: React.PropsWithChildren<Props>) => {
  const [user, setUser] = React.useState(initialUser);
  const context = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  );
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
