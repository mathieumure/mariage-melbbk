'use client';
import React, { useRef } from 'react';
import { SelectedUser } from '@/modules/user/SelectedUser';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/user.context';

export const SelectedUserOnPage = () => {
  const router = useRouter();
  const { setUser, user } = useUser();
  const userRef = useRef(user);
  const handleClick = () => {
    setUser(null);
    router.push('/');
  };
  return <SelectedUser onClick={handleClick}>{userRef.current}</SelectedUser>;
};
