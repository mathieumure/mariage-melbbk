import { ComponentProps } from 'react';

type Props = {
  room: string;
} & ComponentProps<'svg'>;
export const BatBSelection = ({ room, ...svgProps }: Props) => {
  return (
    <svg viewBox="0 0 1535 1044" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps}>
      <rect x="65" y="444" width="242" height="237" fill={room === 'B1' ? 'var(--pink)' : 'transparent'} />
      <rect x="324" y="444" width="242" height="237" fill={room === 'B3' ? 'var(--pink)' : 'transparent'} />
      <rect x="963" y="444" width="242" height="237" fill={room === 'B5' ? 'var(--pink)' : 'transparent'} />
      <rect x="1222" y="444" width="242" height="237" fill={room === 'B7' ? 'var(--pink)' : 'transparent'} />
      <rect x="1222" y="790" width="242" height="237" fill={room === 'B8' ? 'var(--pink)' : 'transparent'} />
      <rect x="963" y="790" width="242" height="237" fill={room === 'B6' ? 'var(--pink)' : 'transparent'} />
      <rect x="324" y="790" width="242" height="237" fill={room === 'B4' ? 'var(--pink)' : 'transparent'} />
      <rect x="65" y="790" width="242" height="237" fill={room === 'B2' ? 'var(--pink)' : 'transparent'} />
      <rect x="850" y="445" width="102" height="236" fill={room === 'B10' ? 'var(--pink)' : 'transparent'} />
      <rect x="585" y="445" width="102" height="163" fill={room === 'B9' ? 'var(--pink)' : 'transparent'} />
    </svg>
  );
};
