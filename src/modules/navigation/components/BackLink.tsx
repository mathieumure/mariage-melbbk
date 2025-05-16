import { BackArrow } from '@/modules/icons/BackArrow';
import Link from 'next/link';
import styles from './BackLink.module.css';

type Props = {
  target?: string;
};
export const BackLink = ({ target = '/' }: Props) => {
  return (
    <Link href={target} className={styles.container}>
      <BackArrow height={32} className={styles.icon} />
    </Link>
  );
};
