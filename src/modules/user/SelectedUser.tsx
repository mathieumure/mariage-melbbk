import styles from './SelectedUser.module.css';
import React, { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
};
export const SelectedUser = (props: PropsWithChildren<Props>) => {
  return <button className={styles.selectedUser} {...props} />;
};
