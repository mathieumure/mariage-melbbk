import { ComponentProps } from 'react';

type Props = {
  room: string;
} & ComponentProps<'svg'>;
export const BatCSelection = ({ room, ...svgProps }: Props) => {
  return (
    <svg viewBox="0 0 2048 926" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <rect x="86" y="28" width="323" height="351" fill={room === 'C1' ? 'var(--pink)' : 'transparent'} />
      <rect x="86" y="548" width="323" height="351" fill={room === 'C2' ? 'var(--pink)' : 'transparent'} />
      <rect x="435" y="548" width="323" height="351" fill={room === 'C4' ? 'var(--pink)' : 'transparent'} />
      <rect x="435" y="28" width="323" height="351" fill={room === 'C3' ? 'var(--pink)' : 'transparent'} />
      <rect x="783" y="28" width="133" height="351" fill={room === 'C9' ? 'var(--pink)' : 'transparent'} />
      <rect x="1136" y="27" width="133" height="351" fill={room === 'C10' ? 'var(--pink)' : 'transparent'} />
      <rect x="1290" y="28" width="323" height="351" fill={room === 'C5' ? 'var(--pink)' : 'transparent'} />
      <rect x="1290" y="548" width="323" height="351" fill={room === 'C6' ? 'var(--pink)' : 'transparent'} />
      <rect x="1639" y="548" width="323" height="351" fill={room === 'C8' ? 'var(--pink)' : 'transparent'} />
      <rect x="1639" y="28" width="323" height="351" fill={room === 'C7' ? 'var(--pink)' : 'transparent'} />
    </svg>
  );
};
