import { BackArrow } from '@/modules/icons/BackArrow';
import Link from 'next/link';
import styles from './BackLink.module.css';

export const BackLink = () => {
  return (
    <Link href="/" className={styles.container}>
      <BackArrow height={32} className={styles.icon} />
    </Link>
  );
};
