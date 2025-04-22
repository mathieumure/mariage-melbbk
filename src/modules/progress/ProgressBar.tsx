import styles from './ProgressBar.module.css';
import type { CSSProperties } from 'react';

type Props = {
  amount: number;
};
export const ProgressBar = ({ amount }: Props) => {
  return <div className={styles.progressBar} style={{ '--progress-amount': amount, '--progress-percent': `${amount}%` } as CSSProperties} />;
};
