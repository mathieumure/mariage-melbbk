import styles from './ProgressBar.module.css';
import type { CSSProperties } from 'react';

type Props = {
  amount: number;
};
export const ProgressBar = ({ amount }: Props) => {
  console.log(amount);
  if (amount === 100) {
    return <div className={styles.progressBarDone}>Traitement en cours...</div>;
  }
  return <div className={styles.progressBar} style={{ '--progress-amount': amount, '--progress-percent': `${amount}%` } as CSSProperties} />;
};
