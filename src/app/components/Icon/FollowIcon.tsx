import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const FollowIcon = (props: Props) => {
  const { size = 24, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg viewBox="0 0 24 24" width={size} height={size}>
        <path
          fillRule="nonzero"
          d="M10.5 5c3.25 0 3.944 3.236 2.5 7 3.717 1.534 4 4.85 4 6H4c0-1.15.283-4.466 4-6-1.445-3.775-.75-7 2.5-7zM18 4a1 1 0 011 1v1h1a1 1 0 010 2h-1v1a1 1 0 01-2 0V7.999L16 8a1 1 0 010-2l1-.001V5a1 1 0 011-1z"
        ></path>
      </svg>
    </div>
  );
};

export default FollowIcon;
