'use client';
import React, { useRef } from 'react';
import { SelectedUser } from '@/modules/user/SelectedUser';
import { useRouter } from 'next/navigation';
import { useUser, useUserEdit } from '@/contexts/user.context';

export const SelectedUserOnPage = () => {
  const router = useRouter();
  const user = useUser();
  const { removeUser } = useUserEdit();
  const userRef = useRef(user);
  const handleClick = () => {
    removeUser();
    router.push('/');
  };
  return <SelectedUser onClick={handleClick}>{userRef.current?.name}</SelectedUser>;
};
