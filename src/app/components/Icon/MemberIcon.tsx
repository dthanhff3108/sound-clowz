import React from 'react';
import c from 'clsx';
import './Icon.scss';
type Props = {
  className?: string;
  size?: number;
};

const MemberIcon = (props: Props) => {
  const { size = 28, className } = props;
  return (
    <div className={c('icon-component', `size${size}`, className)}>
      <svg viewBox="0 0 28 28" width={size} height={size}>
        <path
          fill="rgba(153, 153, 153, 0.7)"
          d="M18.4 18.5l2.5 5 .2.5h6.9l-2.1-4.3-4.1-1.5v-2.5c1.2-1.1 1.8-3.2 1.8-5.1 0-2.1-2-3.6-3.5-3.6s-3.5 1.6-3.5 3.6c0 1.9.5 4 1.8 5.1v2.5h-.1l.1.3z"
        ></path>
        <path
          fill="rgb(153, 153, 153)"
          d="M17.5 19l-5-1.8v-3c1.4-1.2 2-3.8 2-5.9 0-2.4-2.3-4.3-4-4.3-1.7 0-4 1.8-4 4.3 0 2.2.6 4.7 2 5.9v3l-5 1.8-2.5 5h19l-2.5-5z"
        ></path>
      </svg>
    </div>
  );
};

export default MemberIcon;
