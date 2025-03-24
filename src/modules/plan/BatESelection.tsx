import { ComponentProps } from 'react';

type Props = {
  room: string;
} & ComponentProps<'svg'>;
export const BatESelection = ({ room, ...svgProps }: Props) => {
  return (
    <svg viewBox="0 0 2048 579" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <rect x="419" y="49" width="302" height="160" fill={room === 'E13' ? 'var(--pink)' : 'transparent'} />
      <rect x="733" y="49" width="302" height="160" fill={room === 'E12' ? 'var(--pink)' : 'transparent'} />
      <rect x="1047" y="49" width="302" height="160" fill={room === 'E11' ? 'var(--pink)' : 'transparent'} />
      <rect x="1361" y="49" width="302" height="160" fill={room === 'E10' ? 'var(--pink)' : 'transparent'} />
      <rect x="1675" y="49" width="302" height="160" fill={room === 'E9' ? 'var(--pink)' : 'transparent'} />
      <rect x="425" y="314" width="163" height="244" fill={room === 'E1' ? 'var(--pink)' : 'transparent'} />
      <rect x="604" y="314" width="168" height="244" fill={room === 'E2' ? 'var(--pink)' : 'transparent'} />
      <rect x="786" y="314" width="168" height="244" fill={room === 'E3' ? 'var(--pink)' : 'transparent'} />
      <rect x="969" y="314" width="168" height="244" fill={room === 'E4' ? 'var(--pink)' : 'transparent'} />
      <rect x="1151" y="314" width="168" height="244" fill={room === 'E5' ? 'var(--pink)' : 'transparent'} />
      <rect x="1332" y="314" width="168" height="244" fill={room === 'E6' ? 'var(--pink)' : 'transparent'} />
      <rect x="1513" y="314" width="225" height="244" fill={room === 'E7' ? 'var(--pink)' : 'transparent'} />
      <rect x="1754" y="314" width="225" height="244" fill={room === 'E8' ? 'var(--pink)' : 'transparent'} />
    </svg>
  );
};
