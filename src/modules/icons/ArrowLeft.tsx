type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export const ArrowLeft = (props: IconProps) => {
  return (
    <svg {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path d="M15 7L10 12L15 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
